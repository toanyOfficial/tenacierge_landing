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

export async function queryCleaningTotal(failureMessage) {
  try {
    const [rows] = await getPool().query(
      `SELECT COUNT(*) AS totalCount
       FROM tenaCierge.work_header`,
    );

    const system = Number(rows[0]?.totalCount ?? 0);
    const preSystem = getPreSystemRecordCount();

    return Response.json({
      ok: true,
      totalCount: preSystem + system,
      items: [],
      recordCount: { preSystem, system, total: preSystem + system },
      asOfDate: getSeoulDate(),
      recentOperations: [],
    }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    if (error instanceof MissingDatabaseEnvironmentError) {
      return Response.json({ ok: false, message: "DB environment variables are missing" }, { status: 500 });
    }

    console.error(failureMessage, {
      code: error.code,
      errno: error.errno,
      sqlState: error.sqlState,
      sqlMessage: error.sqlMessage,
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
