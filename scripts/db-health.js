import "dotenv/config";
import { MissingDatabaseEnvironmentError, checkDatabaseConnection } from "../lib/db.js";

try {
  await checkDatabaseConnection();
  console.log(JSON.stringify({ ok: true }));
} catch (error) {
  if (error instanceof MissingDatabaseEnvironmentError) {
    console.error(JSON.stringify({ ok: false, message: "DB environment variables are missing" }));
  } else {
    console.error(JSON.stringify({ ok: false, message: "DB connection failed" }));
  }

  process.exit(1);
}
