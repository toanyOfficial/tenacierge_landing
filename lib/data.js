import { MissingDatabaseEnvironmentError, getPool } from "./db.js";

function getPreSystemRecordCount() {
  const value = Number(process.env.PRE_SYSTEM_RECORD_COUNT ?? 0);
  return Number.isSafeInteger(value) && value >= 0 ? value : 0;
}

function getSeoulDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function formatWorkDate(value) {
  if (!value) return null;
  if (typeof value === "string") return value.slice(0, 10);
  return getSeoulDate(value);
}

function formatWorkTime(value) {
  if (!value) return null;
  if (typeof value === "string") {
    const timeMatch = value.match(/(?:T|\s)(\d{2}:\d{2})|^(\d{2}:\d{2})/);
    return timeMatch?.[1] ?? timeMatch?.[2] ?? null;
  }
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(value);
}

function createRoomAlias(index) {
  const group = String.fromCharCode(65 + Math.floor(index / 99));
  const room = String((index % 99) + 1).padStart(2, "0");
  return `운영 객실 ${group}-${room}`;
}

export async function queryCleaningTotal(failureMessage) {
  let queryStage = "누적 업무 집계";
  try {
    const [rows] = await getPool().query(
      `SELECT COUNT(*) AS totalCount
       FROM tenaCierge.work_header`,
    );

    const system = Number(rows[0]?.totalCount ?? 0);
    const preSystem = getPreSystemRecordCount();
    queryStage = "최근 업무 조회";
    const [recentRows] = await getPool().query(
      `SELECT
          wh.id,
          wh.room_id,
          wh.\`date\` AS work_date,
          wh.cleaner_id,
          wh.butler_id,
          wh.checkin_time,
          wh.checkout_time,
          wh.cleaning_end_time,
          wh.supervising_end_time
       FROM tenaCierge.work_header AS wh
       INNER JOIN tenaCierge.client_rooms AS cr
         ON cr.id = wh.room_id
       WHERE COALESCE(wh.cancel_yn, 0) = 0
         AND wh.cleaning_yn = 1
         AND cr.open_yn = 1
         AND wh.\`date\` <= CURDATE()
       ORDER BY
         wh.\`date\` DESC,
         wh.id DESC
       LIMIT 10`,
    );

    const roomAliases = new Map();
    const recentOperations = recentRows.map((row) => {
      if (!roomAliases.has(row.room_id)) roomAliases.set(row.room_id, createRoomAlias(roomAliases.size));
      const status = row.supervising_end_time
        ? "검수 완료"
        : row.cleaning_end_time
          ? "청소 완료"
          : "업무 진행 중";

      return {
        roomAlias: roomAliases.get(row.room_id),
        workDate: formatWorkDate(row.work_date),
        status,
        checkinTime: formatWorkTime(row.checkin_time),
        checkoutTime: formatWorkTime(row.checkout_time),
        completedTime: formatWorkTime(row.supervising_end_time || row.cleaning_end_time),
      };
    });

    return Response.json({
      ok: true,
      totalCount: preSystem + system,
      items: recentOperations,
      recordCount: { preSystem, system, total: preSystem + system },
      asOfDate: getSeoulDate(),
      recentOperations,
    }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    if (error instanceof MissingDatabaseEnvironmentError) {
      return Response.json({ ok: false, message: "DB environment variables are missing" }, { status: 500 });
    }

    console.error(`${failureMessage}: ${queryStage}`, {
      code: error.code,
      message: error.message,
    });

    return Response.json(
      {
        ok: false,
        message: failureMessage,
        ...(process.env.DATA_API_DEBUG === "true" || process.env.NODE_ENV !== "production"
          ? {
              error: {
                code: error.code,
                errno: error.errno,
                sqlState: error.sqlState,
                sqlMessage: error.sqlMessage || error.message,
              },
            }
          : {}),
      },
      { status: 500 },
    );
  }
}
