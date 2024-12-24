const express = require('express')
const cors = require('cors');
const socketIoClient = require('socket.io-client')
const app = express()
app.use(cors())
const port = 3000
const socket = socketIoClient('http://localhost:8080')
app.use(express.json())

app.post('/leaderboard-config', (req, res) => {
  const data = req.body
  console.log(`Received from client: ${JSON.stringify(req.body)}`)
  socket.emit('message-from-leaderboard-service', data);
  res.send({status: 'success'})
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
});


