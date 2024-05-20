import { FunctionComponent, ReactNode, createContext, useState } from 'react'
import IUser from '../types/user.types'

interface IUserContextProviderProps {
  children: ReactNode
}

interface IUserContext {
  currentUser: IUser | null
  isAuthenticated: boolean
  loginUser: (user: IUser) => void
  logoutUser: () => void
}
export const USerContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
})

const UserContextProvider: FunctionComponent<IUserContextProviderProps> = ({
  children
}) => {
  const [currentUser, setCurrentUSer] = useState<IUser | null>(null)

  const isAuthenticated = currentUser !== null

  const loginUser = (user: IUser) => {
    setCurrentUSer(user)
  }

  const logoutUser = (): void => {
    setCurrentUSer(null)
  }

  return (
    <USerContext.Provider
      value={{ currentUser, isAuthenticated, loginUser, logoutUser }}
    >
      {children}
    </USerContext.Provider>
  )
}

export default UserContextProvider
