import { useEffect } from 'react'
import socket from './socketio'
import Messages from './Messages'
import Form from './Form'

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log(socket.id)
    })

    return () => {
      socket.close()
    }
  }, [])

  return (
    <section>
      <Messages />

      <Form />
    </section>
  )
}

export default App
