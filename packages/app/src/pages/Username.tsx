import { FormEvent, useState } from 'react'
import { useSocketIo } from '../contexts/SocketIo'
import { useUser } from '../contexts/User'
import { SET_USER } from '../constants/socketio_events'

export default function Username() {
  const [value, setValue] = useState('')
  const socket = useSocketIo()
  const { setUser } = useUser()

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    socket.emit(SET_USER, value)
    setUser(value)
  }

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Username</legend>

          <input
            autoFocus
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </fieldset>

        <button type="submit">Entrar</button>
      </form>
    </section>
  )
}
