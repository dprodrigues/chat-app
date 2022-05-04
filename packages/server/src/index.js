const dotenv = require('dotenv')
const app = require('./app')
const { createServer } = require('http')
const createSocket = require('./socketio')

const httpServer = createServer(app)

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT = parseInt(process.env.PORT, 10)

createSocket(httpServer)

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
