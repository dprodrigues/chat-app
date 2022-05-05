import { useState, useEffect } from 'react'
import { useSocketIo } from '../contexts/SocketIo'
import { NEW_MESSAGE } from '../constants/socketio_events'

export default function Messages() {
  const [messages, setMessages] = useState<string[]>([])
  const socket = useSocketIo()

  useEffect(() => {
    socket.on(NEW_MESSAGE, (message: string) => {
      setMessages((messages) => [...messages, message])
    })

    return () => {
      socket.off(NEW_MESSAGE)
    }
  }, [socket])

  return (
    <ul>
      {messages?.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  )
}
