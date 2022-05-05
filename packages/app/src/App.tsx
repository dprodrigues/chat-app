import { useState } from 'react'
import Username from './pages/Username'
import Home from './pages/Home'

function App() {
  const [username, setUsername] = useState('')

  if (!username) {
    return <Username setUsername={setUsername} />
  }

  return <Home />
}

export default App
