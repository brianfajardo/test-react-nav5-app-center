import React, { ReactNode } from 'react'
import { AuthProvider } from './contexts'

type Props = {
  children: ReactNode
}

export const Providers: React.FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}
