import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MissingDatabaseEnvironmentError, checkDatabaseConnection, getPool } from "./lib/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "tenacierge_landing",
  });
});

app.get("/api/db-health", async (_req, res) => {
  try {
    await checkDatabaseConnection();
    res.json({ ok: true });
  } catch (error) {
    if (error instanceof MissingDatabaseEnvironmentError) {
      res.status(500).json({
        ok: false,
        message: "DB environment variables are missing",
      });
      return;
    }

    console.error("DB connection failed", error.message);
    res.status(500).json({
      ok: false,
      message: "DB connection failed",
    });
  }
});

app.get("/api/data", async (req, res) => {
  const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 20));

  try {
    const [items] = await getPool().query(
      `SELECT
         id,
         name
       FROM some_table
       ORDER BY id ASC
       LIMIT ?`,
      [limit],
    );

    res.json({
      ok: true,
      items,
    });
  } catch (error) {
    if (error instanceof MissingDatabaseEnvironmentError) {
      res.status(500).json({
        ok: false,
        message: "DB environment variables are missing",
      });
      return;
    }

    console.error("Data query failed", {
      code: error.code,
      errno: error.errno,
      sqlState: error.sqlState,
      sqlMessage: error.sqlMessage,
      message: error.message,
    });

    res.status(500).json({
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
    });
  }
});

app.get("/data", (_req, res) => {
  res.sendFile(path.join(publicDir, "data.html"));
});

app.get(/^\/(?!api(?:\/|$)).*/, (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, () => {
  console.log(`tenacierge_landing server listening on port ${port}`);
});
