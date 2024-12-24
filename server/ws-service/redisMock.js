const Redis = require('ioredis-mock');

const redisSubscriber = new Redis();
const redisPublisher = new Redis();
const subscribeToRedis = (channel, callback) => {
  redisSubscriber.subscribe(channel, (err, count) => {
    if (err) {
      console.error('Failed to subscribe:', err);
      return;
    }
    console.log(`Subscribed to ${count} Redis channel(s): ${channel}`);
  });

  redisSubscriber.on('message', (channel, message) => {
    if (channel === channel) {
      callback(message);
    }
  });
};

const publishEvent = (channel, message) => {
  redisPublisher.publish(channel, message);
};

module.exports = {
  subscribeToRedis,
  publishEvent,
  redisSubscriber,
  redisPublisher,
};
