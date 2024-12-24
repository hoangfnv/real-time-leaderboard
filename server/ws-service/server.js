const http = require('http');
const { Server } = require('socket.io');
const { subscribeToRedis, publishEvent } = require('./redisMock');
const { simulateUpdateUserScore } = require('./leaderboardData');
const { updateConfig } = require('./leaderboardConfigData');

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
});

io.on('connection', (socket) => {
  console.log('New client connected: ', socket.id);

  socket.on('clientEvent', (data) => {
    console.log(`Received from client: ${data}`);
    publishEvent('events', `Client sent data: ${data}`);
  });

  socket.on('message-from-leaderboard-service', (data) => {
    console.log(`Received from leaderboard-service: ${JSON.stringify(data)}`);
    updateConfig(data)
    socket.emit('message-from-ws-service', 'Message received!');
  });


  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(8080, () => {
  console.log('Socket.IO server running on http://localhost:8080');
});

subscribeToRedis('events', (message) => {
  io.emit('event', message);
});

simulateUpdateUserScore()
