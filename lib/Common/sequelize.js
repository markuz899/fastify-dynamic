const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    logging: false,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: "postgres", // Specifica il dialetto
  }
);

sequelize
  .authenticate()
  .then(() => {})
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
