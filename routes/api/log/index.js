const path = require("path");
const LogModel = require("./log");
const ErrorHandler = require(path.resolve("lib/Common/error"));
const logger = require(path.resolve("lib/Logger/"));

module.exports = class Log {
  static async paginated(query) {
    try {
      const current = parseInt(query.current || 1);
      const pageSize = parseInt(query.pageSize) || 15;
      const offset = (current - 1) * pageSize;

      const results = {
        data: [],
        total: 0,
      };

      const { rows, rowCount } = await LogModel.findAndCountAll({
        order: [["createdAt", "DESC"]],
        limit: pageSize,
        offset: offset,
      });

      results.data = rows;
      results.total = rowCount;

      return results;
    } catch (err) {
      logger.error(`paginated METHOD FAILED, CAUSE: ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async list(query) {
    try {
      if (query?.paginated) {
        return await this.paginated(query);
      }
      return await LogModel.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
    } catch (err) {
      logger.error(`POSTGRES-LOG list METHOD FAILED, CAUSE: ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async getOne(id) {
    try {
      let response = await LogModel.findByPk(id);
      if (!response) {
        return {
          error: true,
          name: "DocumentNotFoundError",
          message: "Element not found",
        };
      }
      return response;
    } catch (err) {
      logger.error(`POSTGRES-LOG getOne METHOD FAILED, CAUSE ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async getQuery(query) {
    try {
      let response = await LogModel.findOne({ where: query });
      if (!response) return null;
      return response;
    } catch (err) {
      logger.error(`POSTGRES-LOG getQuery METHOD FAILED, CAUSE ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async create(payload) {
    try {
      return await LogModel.create(payload);
    } catch (err) {
      logger.error(`POSTGRES-LOG create METHOD FAILED, CAUSE: ${err.message}`);
      throw ErrorHandler(err);
    }
  }

  static async updateOne(id, data) {
    try {
      let response = await LogModel.update(data, {
        where: { id },
        returning: true,
      });
      if (response[0] === 0) {
        return {
          error: true,
          name: "DocumentNotFoundError",
          message: "Element not found",
        };
      }
      return response[1][0]; // restituire il record aggiornato
    } catch (err) {
      logger.error(
        `POSTGRES-LOG updateOne METHOD FAILED, CAUSE ${err.message}`
      );
      throw ErrorHandler(err);
    }
  }

  static async remove(id) {
    try {
      let response = await LogModel.destroy({ where: { id } });
      if (response === 0) {
        return {
          error: true,
          name: "DocumentNotFoundError",
          message: "Element not found!",
        };
      }
      return await this.list();
    } catch (err) {
      logger.error(`POSTGRES-LOG remove METHOD FAILED, CAUSE ${err.message}`);
      throw ErrorHandler(err);
    }
  }
};
