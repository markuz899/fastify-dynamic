const path = require("path");
const LogModel = require("./log");
const ErrorHandler = require(path.resolve("lib/Common/error"));
const Logger = require(path.resolve("lib/Logger/"));
let logger = new Logger(process.env.LOG_ACTIVE, process.env.LOG_LEVEL);

REDIS_KEY = "logs";
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
    }
  }

  static async list(fastify) {
    try {
      const { redis } = fastify;
      let res = await redis.get(REDIS_KEY);
      if (!res) {
        let data = await LogModel.find({}, { __v: 0 });
        res = await redis.set(REDIS_KEY, JSON.stringify(data));
      }
      return JSON.parse(res);
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

  static async create(payload, fastify) {
    try {
      const { redis } = fastify;
      let res = await LogModel.create(payload);
      let data = await this.list(fastify);
      await redis.del(REDIS_KEY);
      await redis.set(REDIS_KEY, JSON.stringify(data));
      return res;
    } catch (err) {
      logger.error(`MONGO-LOG create METHOD FAILED, CAUSE: ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async updateOne(_id, data) {
    try {
      const { redis } = fastify;
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
      await redis.del(REDIS_KEY);
      return response;
    } catch (err) {
      logger.error(`MONGO-LOG updateOne METHOD FAILED, CAUSE ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async remove(id) {
    try {
      const { redis } = fastify;
      let response = await LogModel.deleteOne({ _id: id });
      if (response.deletedCount === 0)
        return {
          error: true,
          name: "DocumentNotFoundError",
          message: "Element not found!",
        };
      await redis.del(REDIS_KEY);
      return await this.list(fastify);
    } catch (err) {
      logger.error(`MONGO-LOG remove METHOD FAILED, CAUSE ${err.message}`);
      throw ErrorHandler(err);
    }
  }
};
