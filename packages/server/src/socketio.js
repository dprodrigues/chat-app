const { Server } = require('socket.io')

let users = []

module.exports = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  })

  io.on('connection', (socket) => {
    socket.on('disconnect', () => {
      users = users.filter((filter) => filter.id !== socket.id)
      io.sockets.emit('new-user', users)
    })

    socket.on('send-message', (message) => {
      io.sockets.emit('new-message', message)
    })

    socket.on('set-user', (user) => {
      users.push({ id: socket.id, name: user })

      io.sockets.emit('new-user', users)
    })
  })
}
