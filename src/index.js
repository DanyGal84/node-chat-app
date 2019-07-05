const app = require('./app.js')
const http = require('http')
const port = process.env.PORT
const socketio = require('socket.io')

const server = http.createServer(app)

const io = socketio(server)

io.on('connection', (socket) => {
  console.log('New WebSocket connection')

  socket.emit('message', 'Welcome')

  socket.on('sendMessage', (message) => {
    io.emit('message', message)
  })
})

server.listen(port, () => {
  console.log(`Server is up in port ${port}!`)
})