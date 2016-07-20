'use strict';

const Redis = require('ioredis');

class RedisClientComponent extends Skyer.Component {
  constructor( options ) {
    super(options);
  }

  _getConfig() {
    const redisConfKey = this.options.redis || 'redis';

    return this.skyer.config.get(redisConfKey);
  }

  _build() {
    super._build();

    const options = this.config || {};
    const redisClient = new Redis(options);

    redisClient.on('error', err => {
      this.emit('error', err);
    });

    return redisClient;
  }
}

module.exports = RedisClientComponent;
