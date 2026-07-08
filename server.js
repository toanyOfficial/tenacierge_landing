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

app.get("/api/results-summary", async (_req, res) => {
  try {
    const [rows] = await getPool().query(
      `SELECT COUNT(*) AS totalCount
       FROM tenaCierge.order_header`,
    );

    res.json({
      ok: true,
      totalCount: Number(rows[0]?.totalCount ?? 0),
      items: [],
    });
  } catch (error) {
    if (error instanceof MissingDatabaseEnvironmentError) {
      res.status(500).json({
        ok: false,
        message: "DB environment variables are missing",
      });
      return;
    }

    console.error("Results summary query failed", {
      code: error.code,
      errno: error.errno,
      sqlState: error.sqlState,
      sqlMessage: error.sqlMessage,
      message: error.message,
    });

    res.status(500).json({
      ok: false,
      message: "Results summary query failed",
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

app.get("/api/data", async (_req, res) => {
  try {
    const [rows] = await getPool().query(
      `SELECT COUNT(*) AS totalCount
       FROM tenaCierge.work_header`,
    );

    res.json({
      ok: true,
      totalCount: Number(rows[0]?.totalCount ?? 0),
      items: [],
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

app.get("/", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.get(/^\/(?!api(?:\/|$)).*/, (req, res) => {
  console.info(`Redirecting unknown route to index: ${req.originalUrl}`);
  res.redirect(302, "/");
});

app.listen(port, () => {
  console.log(`tenacierge_landing server listening on port ${port}`);
});
