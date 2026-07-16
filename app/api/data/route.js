import { MissingDatabaseEnvironmentError, getPool } from "../../../lib/db.js";

export const runtime = "nodejs";

export async function GET() {
  try {
    const [rows] = await getPool().query(
      `SELECT COUNT(*) AS totalCount
       FROM tenaCierge.order_header`,
    );

    return Response.json({
      ok: true,
      totalCount: Number(rows[0]?.totalCount ?? 0),
      items: [],
    });
  } catch (error) {
    if (error instanceof MissingDatabaseEnvironmentError) {
      return Response.json({ ok: false, message: "DB environment variables are missing" }, { status: 500 });
    }

    console.error("Data query failed", {
      code: error.code,
      errno: error.errno,
      sqlState: error.sqlState,
      sqlMessage: error.sqlMessage,
      message: error.message,
    });

    return Response.json(
      {
        ok: false,
        message: "Data query failed",
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
