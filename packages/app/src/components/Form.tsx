import { FormEvent, ChangeEvent, useState } from 'react'
import { useSocketIo } from '../contexts/SocketIo'
import { SEND_MESSAGE } from '../constants/socketio_events'

export default function Form() {
  const [value, setValue] = useState('')
  const socket = useSocketIo()

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    socket.emit(SEND_MESSAGE, value)
    setValue('')
  }

  const handleTextareaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input value={value} onChange={handleTextareaChange} />
      <button type="submit">send message</button>
    </form>
  )
}