import { useUser } from './contexts/User'
import Username from './pages/Username'
import Home from './pages/Home'

function App() {
  const { user } = useUser()

  if (!user) return <Username />

  return <Home />
}

export default App
