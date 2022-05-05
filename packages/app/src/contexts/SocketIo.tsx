import { ReactNode, createContext, useContext } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:4000')

const SocketIoContext = createContext(socket)

const SocketIoProvider = ({ children }: { children: ReactNode }) => (
  <SocketIoContext.Provider value={socket}>{children}</SocketIoContext.Provider>
)

const useSocketIo = () => {
  const context = useContext(SocketIoContext)

  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketIoProvider')
  }

  return context
}

export { SocketIoProvider, useSocketIo }
