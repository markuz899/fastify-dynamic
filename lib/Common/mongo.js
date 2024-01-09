const { promisify } = require("util");
const path = require("path");
const mongoose = require("mongoose");
const logger = require(path.resolve("lib/Logger/"));
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = mongoose.connection;

connection.on = promisify(connection.on).bind(connection);
connection.once = promisify(connection.once).bind(connection);

connection.on("connecting", () => {
  logger.info(`MONGO CONNECTION STARTED ON ${process.env.MONGO_DB}...`);
});

connection.on("error").catch((err) => {
  logger.error(`MONGO CONNECTION FAILED, DISCONNECT, ${err}`);
  mongoose.disconnect();
});

connection.on("connected", () => {
  logger.info(`MONGO SUCCESSFULLY CONNECT AT ${process.env.MONGO_DB}`);
});

connection.once("open", () => {
  logger.info(`MONGO CONNECTION OPENED.`);
});

connection.on("reconnected", () => {
  logger.info("MONGO RECONNECTED");
});

connection.on("disconnected", () => {
  logger.info(`MONGO DISCONNECTED, TRY TO CONNECT`);
  mongoose
    .connect(process.env.MONGO_DB, config)
    .catch((err) => logger.error(`MONGO CONNECTION FAILED, ${err}`));
});

process.on("exit", () => {
  mongoose.connection.close();
  logger.info("DESCONNECTION FROM MONGO TOO");
});

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_DB, config)
  .catch((err) => logger.error(`MONGO CONNECTION FAILED, ${err}`));

exports.onReady = new Promise(async (resolve, reject) => {
  try {
    await connection.on("connected");
    resolve();
  } catch (err) {
    reject();
  }
});
