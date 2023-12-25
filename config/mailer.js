const path = require("path");
const ErrorHandler = require(path.resolve("lib/Common/error"));
const Logger = require(path.resolve("lib/Logger/"));
const nodeMailer = require("nodemailer");
let logger = new Logger(process.env.LOG_ACTIVE, process.env.LOG_LEVEL);

module.exports = class Nodemailer {
  static async sender(option) {
    let setting = {
      ...option,
      attachments: [
        {
          filename: "logo.png",
          path: "public/store/background.png",
          cid: "unique@images.it",
        },
      ],
    };
    try {
      const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.DEFAULT_EMAIL,
          pass: process.env.DEFAULT_PASSWORD,
        },
      });
      return await transporter.sendMail(setting);
    } catch (err) {
      logger.error(`CLASS MAILER METHOD sender FAILED, CAUSE: ${err.message}`);
      throw ErrorHandler(err);
    }
  }
};
