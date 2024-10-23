const { Pool } = require("pg");
const path = require("path");
const logger = require(path.resolve("lib/Logger"));

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

pool.on("connect", () => {});

pool.on("error", (err) => {
  logger.error(`PostgreSQL connection error: ${err}`);
  process.exit(-1);
});

module.exports = pool;
