import React, { ReactNode } from 'react'
import { CrashAnalyticsProvider, AuthProvider } from './contexts'

type Props = {
  children: ReactNode
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <CrashAnalyticsProvider>
      <AuthProvider>{children}</AuthProvider>
    </CrashAnalyticsProvider>
  )
}
