import {
  Dispatch,
  SetStateAction,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react'

interface IUserContext {
  user: string
  setUser: Dispatch<SetStateAction<string>>
}

interface IUserProvider {
  children: ReactNode
}

const UserContext = createContext<IUserContext>({} as IUserContext)

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState('')

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

export { UserProvider, useUser }
