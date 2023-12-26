const fastify = require("fastify")({
  logger: false,
  connectionTimeout: 5000,
});
const cors = require("@fastify/cors");
const path = require("path");
const fs = require("fs");
const Logger = require(path.resolve("lib/Logger"));
const bodyParser = require("@fastify/formbody");
const mongoConfig = require(path.resolve("lib/Common/mongo"));
const Redis = require("ioredis");
const client = new Redis({ host: "localhost", port: 6379 });

class Server {
  constructor() {
    this.app = fastify;
    this.logger = new Logger(process.env.LOG_ACTIVE, process.env.LOG_LEVEL);
  }

  _loadmiddleware() {
    this.logger.info(`***MIDDLEWARE***.`);
    try {
      this.app.register(cors);
      this.app.register(bodyParser, {
        limit: 52428800, // 50mb in bytes
      });
      this.app.register(require("@fastify/redis"), {
        host: "127.0.0.1",
        port: 6379,
        family: 4,
        client,
      });

      let middlewares = fs.readdirSync(path.resolve("middleware/"));
      middlewares.forEach((middleware) => {
        try {
          let tmp_middleware = require(path.resolve(
            `middleware/${middleware}`
          ));
          this.app.register(tmp_middleware);
          this.logger.info(`* ${middleware} MIDDLEWARE successfully loaded`);
        } catch (err) {
          this.logger.error(
            `${middleware} MIDDLEWARE not loaded, cause: ${err}`
          );
        }
      });
    } catch (err) {
      this.logger.error(`LOAD MIDDLEWARE FAILED, CAUSE: \n ${err}`);
    }
    return this;
  }

  _loadApiRoutes() {
    this.logger.info(`***API ROUTE***.`);
    try {
      let routesPath = fs.readdirSync(path.resolve("routes/api/"));
      routesPath.forEach((component) => {
        try {
          let tmp_apiRoute = require(path.resolve(
            `routes/api/${component}/api`
          ));
          this.app.register(tmp_apiRoute, { prefix: `/${component}` });
          this.logger.info(`- /${component} API route successfully loaded`);
        } catch (err) {
          this.logger.info(`${component} API route not loaded, cause: ${err}`);
        }
      });
    } catch (err) {
      throw new Error(`Api routes not loaded, cause: \n ${err} `);
    }
    return this;
  }

  _loadMongoConnection() {
    mongoConfig.onReady
      .then(() => {
        try {
          // this.logger.info(`MONGOCONFIG successfully loaded`);
        } catch (err) {
          this.logger.error(`LOAD MONGOCONFIG FAILED, CAUSE: \n ${err}`);
        }
      })
      .catch((err) => {
        this.logger.error(`LOAD MONGO FAILED, CAUSE: \n ${err}`);
      });
    return this;
  }

  async init() {
    try {
      await this._loadmiddleware();
      await this._loadApiRoutes();
      await this._loadMongoConnection();
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
        this.logger.info(`APPLICATION STARTED ON PORT ${process.env.PORT}`);
      });
      return this;
    } catch (err) {
      throw new Error(`START APPLICATION FAILED, ${err}`);
    }
  }
}

module.exports = new Server();
