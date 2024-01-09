const path = require("path");
const LogModel = require("./log");
const ErrorHandler = require(path.resolve("lib/Common/error"));
const logger = require(path.resolve("lib/Logger/"));

module.exports = class Log {
  static async paginated(query) {
    try {
      const current = parseInt(query.current || 1);
      const pageSize = parseInt(query.pageSize) || 15;
      const skipIndex = (current - 1) * pageSize;
      const results = {
        data: [],
        total: 0,
      };

      results.data = await LogModel.find()
        .sort({ createdAt: -1 })
        .limit(pageSize)
        .skip(skipIndex)
        .exec();
      results.total = await LogModel.find().count();

      return results;
    } catch (err) {
      logger.error(`paginated METHOD FAILED, CAUSE: ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async list(query) {
    try {
      if (query.paginated) {
        return await this.paginated(query);
      }
      return await LogModel.find({}, { __v: 0 });
    } catch (err) {
      logger.error(`MONGO-LOG list METHOD FAILED, CAUSE: ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async getOne(id) {
    try {
      let response = await LogModel.findById(id);
      if (!response) {
        return {
          error: true,
          name: "DocumentNotFoundError",
          message: "Element not found",
        };
      }
      return response;
    } catch (err) {
      logger.error(`MONGO-LOG getOne METHOD FAILED, CAUSE ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async getQuery(query) {
    try {
      let response = await LogModel.findOne(query);
      if (!response) {
        return {
          error: true,
          name: "DocumentNotFoundError",
          message: "Element not found",
        };
      }
      return response;
    } catch (err) {
      logger.error(`MONGO-LOG getQuery METHOD FAILED, CAUSE ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async create(payload) {
    try {
      return await LogModel.create(payload);
    } catch (err) {
      logger.error(`MONGO-LOG create METHOD FAILED, CAUSE: ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async updateOne(_id, data) {
    try {
      let response = await LogModel.findOneAndUpdate({ _id }, data, {
        new: true,
      });
      if (!response) {
        return {
          error: true,
          name: "DocumentNotFoundError",
          message: "Element not found",
        };
      }
      return response;
    } catch (err) {
      logger.error(`MONGO-LOG updateOne METHOD FAILED, CAUSE ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async remove(id) {
    try {
      let response = await LogModel.deleteOne({ _id: id });
      if (response.deletedCount === 0)
        return {
          error: true,
          name: "DocumentNotFoundError",
          message: "Element not found!",
        };
      return await this.list();
    } catch (err) {
      logger.error(`MONGO-LOG remove METHOD FAILED, CAUSE ${err.message}`);
      throw ErrorHandler(err);
    }
  }
};
