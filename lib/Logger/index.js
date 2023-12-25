const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;
module.exports = class Logger {
  constructor(active, level) {
    this.level = level;
    this.active = active;
    this.logger = createLogger({
      level: level,
      json: false,
      format: combine(
        timestamp(),
        printf((info) => {
          return `${info.timestamp} ${info.level.toUpperCase()}: ${
            info.message
          }`;
        })
      ),
      transports: [
        new transports.Console({
          level: "debug",
        }),
        // new transports.File({
        //   filename: "logs/info.log",
        //   level: "info",
        // }),
        // new transports.File({
        //   filename: "logs/error.log",
        //   level: "error",
        // }),
        // new transports.File({
        //   filename: "logs/debug.log",
        //   level: "debug",
        // }),
      ],
    });
  }

  info(msg) {
    if (this.active && this.level.indexOf("info") !== -1) {
      this.logger.log({
        level: "info",
        message: msg,
      });
    }
  }

  error(msg) {
    if (this.active) {
      this.logger.log({
        level: "error",
        message: msg,
      });
    }
  }

  debug(msg) {
    if (this.active && this.level.indexOf("debug") !== -1) {
      this.logger.log({
        level: "debug",
        message: msg,
      });
    }
  }
};
