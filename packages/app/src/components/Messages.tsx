import { useState, useEffect } from 'react'
import { useSocketIo } from '../contexts/SocketIo'
import { NEW_MESSAGE } from '../constants/socketio_events'

interface IMessage {
  username: string
  content: string
}

export default function Messages() {
  const [messages, setMessages] = useState<IMessage[]>([])
  const socket = useSocketIo()

  useEffect(() => {
    socket.on(NEW_MESSAGE, (message: IMessage) => {
      setMessages((messages) => [message, ...messages])
    })

    return () => {
      socket.off(NEW_MESSAGE)
    }
  }, [socket])

  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        height: '75vh',
        margin: 0,
        overflowY: 'scroll',
        padding: 0,
        width: '50vw',
      }}
    >
      {messages?.map((message, index) => (
        <li key={index} style={{ listStyle: 'none' }}>
          <p style={{ margin: '0 0 8px' }}>
            <strong>{message.username}</strong>: {message.content}
          </p>
        </li>
      ))}
    </ul>
  )
}
