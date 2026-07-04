import "dotenv/config";
import { MissingDatabaseEnvironmentError, getPool } from "../lib/db.js";

const query = `SELECT
  id,
  name
FROM some_table
ORDER BY id ASC
LIMIT 20`;

try {
  const [rows] = await getPool().query(query);

  console.log(
    JSON.stringify(
      {
        ok: true,
        count: rows.length,
        sample: rows,
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
