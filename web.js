const Graceful = require('@ladjs/graceful');
const Mongoose = require('@ladjs/mongoose');
const Redis = require('@ladjs/redis');
const Web = require('@ladjs/web');
const _ = require('lodash');
const ip = require('ip');
const sharedConfig = require('@ladjs/shared-config');

const config = require('./config');
const logger = require('./helpers/logger');
const webConfig = require('./config/web');

const webSharedConfig = sharedConfig('WEB');
const client = new Redis(webSharedConfig.redis);
const web = new Web(webConfig(client));

if (!module.parent) {
  const mongoose = new Mongoose(
    _.merge({ logger }, web.config.mongoose, config.mongoose)
  );

  const graceful = new Graceful({
    mongooses: [mongoose],
    servers: [web],
    redisClients: [web.client, client],
    logger
  });

  (async () => {
    try {
      await Promise.all([
        mongoose.connect(),
        web.listen(web.config.port),
        graceful.listen()
      ]);
      if (process.send) process.send('ready');
      const { port } = web.server.address();
      logger.info(
        `Lad web server listening on ${port} (LAN: ${ip.address()}:${port})`
      );
      if (config.env === 'development')
        logger.info(
          `Please visit ${config.urls.web} in your browser for testing`
        );
    } catch (err) {
      logger.error(err);
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1);
    }
  })();
}

module.exports = web;
