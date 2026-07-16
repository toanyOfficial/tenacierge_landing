import "dotenv/config";
import { MissingDatabaseEnvironmentError, getPool } from "../lib/db.js";

try {
  const [rows] = await getPool().query(
    `SELECT COUNT(*) AS totalCount
     FROM tenaCierge.order_header`,
  );

  console.log(
    JSON.stringify(
      {
        ok: true,
        totalCount: Number(rows[0]?.totalCount ?? 0),
        items: [],
      },
      null,
      2,
    ),
  );

  process.exit(0);
} catch (error) {
  if (error instanceof MissingDatabaseEnvironmentError) {
    console.error(JSON.stringify({ ok: false, message: "DB environment variables are missing" }, null, 2));
  } else {
    console.error(
      JSON.stringify(
        {
          ok: false,
          message: "Data query failed",
          error: {
            code: error.code,
            errno: error.errno,
            sqlState: error.sqlState,
            sqlMessage: error.sqlMessage || error.message,
          },
        },
        null,
        2,
      ),
    );
  }

  process.exit(1);
}
