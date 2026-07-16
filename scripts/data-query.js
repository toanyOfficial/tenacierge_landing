import { MissingDatabaseEnvironmentError, getPool } from "../lib/db.js";

const query = `SELECT COUNT(*) AS totalCount
FROM tenaCierge.order_header`;

try {
  const [rows] = await getPool().query(query);

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
