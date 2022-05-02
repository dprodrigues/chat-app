const { Server } = require('socket.io')

const users = []

module.exports = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  })

  io.on('connection', (socket) => {
    users.push(socket)

    console.log('user %s connected', socket.id)

    socket.on('disconnect', () => {
      const index = users.findIndex((user) => user.id === socket.id)

      if (index !== -1) {
        users.splice(index, 1)
      }

      console.log('user %s disconnected', socket.id)
    })

    socket.on('send-message', (message) => {
      console.log('message:', message)

      io.sockets.emit('new-message', message)
    })
  })
}
