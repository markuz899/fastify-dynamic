const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

const colors = {
  info: "\x1b[32m", // Green
  warn: "\x1b[33m", // Yellow
  error: "\x1b[31m", // Red
  debug: "\x1b[96m", // Blue
  reset: "\x1b[0m", // Reset color
};
class Logger {
  constructor(active, level) {
    this.level = level;
    this.active = active;
    this.logger = createLogger({
      level: level,
      json: false,
      format: combine(
        timestamp(),
        printf(({ timestamp, level, message }) => {
          const msg = `${timestamp}${
            colors[level]
          } ${level.toUpperCase()}: ${message} ${colors.reset}`;
          return msg;
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

  warn(msg) {
    if (this.active && this.level.indexOf("info") !== -1) {
      this.logger.log({
        level: "warn",
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
}

const loggerInstance = new Logger(
  process.env.LOG_ACTIVE,
  process.env.LOG_LEVEL
);
module.exports = loggerInstance;
