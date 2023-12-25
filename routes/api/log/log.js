const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collection = "Log";
const LogSchema = new Schema({
  event: { type: String, trim: true },
  level: { type: String, trim: true, default: "debug" },
  createdAt: { type: Date, default: Date.now },
});

LogSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.__v;
  return obj;
};

let LogModel = mongoose.model(collection, LogSchema);

module.exports = LogModel;
