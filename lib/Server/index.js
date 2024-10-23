const fastify = require("fastify")({
  logger: false,
  connectionTimeout: 5000,
});
const cors = require("@fastify/cors");
const path = require("path");
const fs = require("fs");
const logger = require(path.resolve("lib/Logger"));
const bodyParser = require("@fastify/formbody");
const postgresPool = require(path.resolve("lib/Common/postgres"));
const sequelize = require(path.resolve("lib/Common/sequelize"));

class Server {
  constructor() {
    this.app = fastify;
  }

  _loadmiddleware() {
    logger.debug(`***MIDDLEWARE***.`);
    try {
      this.app.register(cors);
      this.app.register(bodyParser, {
        limit: 52428800, // 50mb in bytes
      });

      let middlewares = fs.readdirSync(path.resolve("middleware/"));
      middlewares.forEach((middleware) => {
        try {
          let tmp_middleware = require(path.resolve(
            `middleware/${middleware}`
          ));
          this.app.addHook("preHandler", tmp_middleware);
          logger.info(`* ${middleware} MIDDLEWARE successfully loaded`);
        } catch (err) {
          logger.error(`${middleware} MIDDLEWARE not loaded, cause: ${err}`);
        }
      });
    } catch (err) {
      logger.error(`LOAD MIDDLEWARE FAILED, CAUSE: \n ${err}`);
    }
    return this;
  }

  _loadApiRoutes(prefix) {
    logger.debug(`***API ROUTE***.`);
    try {
      let routesPath = fs.readdirSync(path.resolve("routes/api/"));
      routesPath.forEach((component) => {
        try {
          let tmp_apiRoute = require(path.resolve(
            `routes/api/${component}/api`
          ));
          this.app.register(tmp_apiRoute, {
            prefix: `${prefix}/${component}`,
          });
          logger.info(`- /${component} API route successfully loaded`);
        } catch (err) {
          logger.error(`${component} API route not loaded, cause: ${err}`);
        }
      });
    } catch (err) {
      throw new Error(`Api routes not loaded, cause: \n ${err} `);
    }
    return this;
  }

  async _loadDatabaseConnection() {
    logger.debug(`***POSTGRES CONNECTION***.`);
    try {
      await sequelize;
      logger.info("Sequelize connected to PostgreSQL successfully");
    } catch (err) {
      logger.error(`Sequelize connection failed, cause: ${err}`);
      throw new Error(`Sequelize connection failed: ${err}`);
    }
    return this;
  }

  async init() {
    try {
      this._loadmiddleware();
      this._loadApiRoutes("/api");
      await this._loadDatabaseConnection();
    } catch (err) {
      throw new Error(`ERROR TO INIT APPLICATION, CAUSE: \n ${err}`);
    }
  }

  start() {
    try {
      this.app.get("/public/*", async (request, reply) => {
        reply.sendFile(request.params["*"]);
      });

      this.app.listen({ port: process.env.PORT, host: "0.0.0.0" }, (err) => {
        if (err) {
          throw err;
        }
        logger.debug(`APPLICATION STARTED ON PORT ${process.env.PORT}`);
      });
      return this;
    } catch (err) {
      throw new Error(`START APPLICATION FAILED, ${err}`);
    }
  }
}

module.exports = new Server();
