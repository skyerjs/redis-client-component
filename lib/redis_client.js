'use strict';

class RedisClientComponent extends Skyer.Component {
  constructor( options ) {
    super(options);

    this.redisClient = null;
  }

  _defaultOptions() {
    return {
      config_key: 'redis',
      connection: {
        port: 6379,          // Redis port
        host: '127.0.0.1',   // Redis host
        family: 4,           // 4 (IPv4) or 6 (IPv6)
        password: '',
        db: 0
      }
    };
  }

  _getConfig() {
    const confKey = this.options.config_key;
    const connection = this.skyer.config.get(confKey) || {};

    return Skyer._.extend(this.options.connection, connection);
  }

  _build() {
    super._build();

    const Redis = require('ioredis');

    const options = this.config || {};
    const redisClient = new Redis(options);

    redisClient.on('error', err => {
      this.emit('error', err);
    });

    this.redisClient = redisClient;
    return redisClient;
  }

  shutdown(){
    super.shutdown();

    if( this.redisClient ){
      this.redisClient.end();
    }
  }
}

module.exports = RedisClientComponent;
