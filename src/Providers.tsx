import React, { ReactNode } from 'react'
import { AuthProvider } from './contexts/AuthProvider'
import { CrashAnalyticsProvider } from './contexts/CrashAnalytics'

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
