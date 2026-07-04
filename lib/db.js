import mysql from "mysql2/promise";

const requiredEnvVars = ["DB_HOST", "DB_USER", "DB_PASSWORD", "DB_PORT", "DB_NAME"];

export class MissingDatabaseEnvironmentError extends Error {
  constructor(missingVariables) {
    super(`Missing required database environment variables: ${missingVariables.join(", ")}`);
    this.name = "MissingDatabaseEnvironmentError";
    this.missingVariables = missingVariables;
  }
}

export function assertDatabaseEnvironment() {
  const missingVariables = requiredEnvVars.filter((key) => !process.env[key]);

  if (missingVariables.length > 0) {
    throw new MissingDatabaseEnvironmentError(missingVariables);
  }
}

let pool;

export function getPool() {
  assertDatabaseEnvironment();

  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  return pool;
}

export async function checkDatabaseConnection() {
  const dbPool = getPool();
  const connection = await dbPool.getConnection();

  try {
    await connection.ping();
  } finally {
    connection.release();
  }
}
