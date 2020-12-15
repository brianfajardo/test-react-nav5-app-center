import React, { ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthProvider } from './contexts/AuthProvider'
import { CrashAnalyticsProvider } from './contexts/CrashAnalytics'

type Props = {
  children: ReactNode
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <CrashAnalyticsProvider>
      <AuthProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </AuthProvider>
    </CrashAnalyticsProvider>
  )
}
