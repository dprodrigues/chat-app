import { FormEvent, ChangeEvent, useState } from 'react'
import { useSocketIo } from '../contexts/SocketIo'
import { useUser } from '../contexts/User'
import { SEND_MESSAGE } from '../constants/socketio_events'

export default function Form() {
  const [value, setValue] = useState('')
  const socket = useSocketIo()
  const { user } = useUser()

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    socket.emit(SEND_MESSAGE, { username: user, content: value })
    setValue('')
  }

  const handleTextareaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50vw',
      }}
    >
      <input value={value} onChange={handleTextareaChange} autoFocus />
      <button style={{ marginLeft: 'auto' }} type="submit">
        enter
      </button>
    </form>
  )
}
