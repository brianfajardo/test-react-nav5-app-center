import React, { ReactNode, useEffect, useState } from 'react'
import { useAsyncStorage } from '../hooks/useAsyncStorage'
import { LSKeys } from '../types/localStorage'

type Props = {
  children: ReactNode
}

type User = null | {
  username: string
}

type AuthContext = {
  user: User
  loading: boolean
  login: () => void
  logout: () => void
}

export const AuthContext = React.createContext<AuthContext>({
  user: null,
  loading: true,
  login: () => {},
  logout: () => {},
})

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useAsyncStorage(LSKeys.User)
  const [loading, setLoading] = useState<boolean>(true)

  const login = () => setUser({ username: 'Santa' })
  const logout = () => setUser(null)

  const contextValue = {
    user,
    loading,
    login,
    logout,
  }

  useEffect(() => {
    setLoading(false)
  }, [user])

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
