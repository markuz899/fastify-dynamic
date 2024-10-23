const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");
const sequelize = require(path.resolve("lib/Common/sequelize"));

const LogModel = sequelize.define(
  "Log",
  {
    event: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    level: {
      type: DataTypes.STRING,
      defaultValue: "debug",
      trim: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "logs",
    timestamps: true,
  }
);

module.exports = LogModel;
