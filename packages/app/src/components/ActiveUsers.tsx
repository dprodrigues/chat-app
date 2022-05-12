import { useState, useEffect } from 'react'
import { useSocketIo } from '../contexts/SocketIo'
import { NEW_USER } from '../constants/socketio_events'

interface IUser {
  id: string
  name: string
}

export default function ActiveUsers() {
  const [users, setUsers] = useState<IUser[]>([] as IUser[])
  const socket = useSocketIo()

  useEffect(() => {
    socket.on(NEW_USER, (newUsers) => {
      setUsers(newUsers)
    })

    return () => {
      socket.off(NEW_USER)
    }
  }, [socket])

  return (
    <article style={{ height: '75vh' }}>
      <h2 style={{ marginTop: 0 }}>Usuários ativos</h2>

      <ul style={{ margin: 0, padding: 0 }}>
        {users?.map((user) => {
          return (
            <li
              key={user.id}
              style={{ listStyle: 'none', marginBottom: '8px' }}
            >
              {user.name}
            </li>
          )
        })}
      </ul>
    </article>
  )
}
