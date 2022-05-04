import { useState, useEffect } from 'react'
import socket from './socketio'
import { NEW_MESSAGE } from './constants/socketio_events'

export default function Messages() {
  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {
    socket.on(NEW_MESSAGE, (message: string) => {
      setMessages((messages) => [...messages, message])
    })

    return () => {
      socket.off(NEW_MESSAGE)
    }
  }, [])

  return (
    <ul>
      {messages?.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  )
}
