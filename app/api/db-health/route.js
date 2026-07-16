import { MissingDatabaseEnvironmentError, checkDatabaseConnection } from "../../../lib/db.js";

export async function GET() {
  try {
    await checkDatabaseConnection();
    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof MissingDatabaseEnvironmentError) {
      return Response.json({ ok: false, message: "DB environment variables are missing" }, { status: 500 });
    }
    console.error("DB connection failed", error.message);
    return Response.json({ ok: false, message: "DB connection failed" }, { status: 500 });
  }
}
