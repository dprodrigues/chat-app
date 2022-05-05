import { Dispatch, SetStateAction, FormEvent, useState } from 'react'
import { useSocketIo } from '../contexts/SocketIo'
import { SET_USERNAME } from '../constants/socketio_events'

interface IUsernameProps {
  setUsername: Dispatch<SetStateAction<string>>
}

export default function Username({ setUsername }: IUsernameProps) {
  const [value, setValue] = useState('')
  const socket = useSocketIo()

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    socket.emit(SET_USERNAME, value)
    setUsername(value)
  }

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Username</legend>

          <input
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
