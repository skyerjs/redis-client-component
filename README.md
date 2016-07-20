# skyer-redis-client-component

[![npm version](https://badge.fury.io/js/skyer-redis-client-component.svg)](https://badge.fury.io/js/skyer-redis-client-component)

> Skyer redis client component.

## Install

[![NPM](https://nodei.co/npm/skyer-redis-client-component.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/skyer-redis-client-component/)

```bash
$ npm i --save skyer-redis-client-component
```

## Register

/app/components/redis_client.component.js

```js
module.exports = require('skyer-redis-client-component');
```

## Usage

```js
const redisClient = skyer.componentManager.getComponent('redisClient');

yield redisClient.set('skyer','hello!');

const result = yield redisClient.get('skyer');

console.log(result);
```

hello!

## Options

todo

## Licences

[MIT](LICENSE)