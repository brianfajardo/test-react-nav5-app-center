import React, { ReactNode, useEffect, useState } from 'react'
import Crashes from 'appcenter-crashes'

type Props = {
  children: ReactNode
}

type CrashAnalyticsContext = {
  lastSessionCrashed: boolean
  resetLastSessionCrashed: () => void
}

export const CrashAnalyticsContext = React.createContext<CrashAnalyticsContext>(
  {
    lastSessionCrashed: false,
    resetLastSessionCrashed: () => {},
  },
)

export const CrashAnalyticsProvider: React.FC<Props> = ({ children }) => {
  const [lastSessionCrashed, setLastSessionCrashed] = useState<boolean>(false)

  const contextValue = {
    lastSessionCrashed,
    resetLastSessionCrashed: () => setLastSessionCrashed(false),
  }

  useEffect(() => {
    const onLastSessionCrashed = async () => {
      const lastSessionCrashed = await Crashes.hasCrashedInLastSession()

      if (lastSessionCrashed) {
        Crashes.lastSessionCrashReport()
        setLastSessionCrashed(true)
      }
    }

    onLastSessionCrashed()
  }, [])

  return (
    <CrashAnalyticsContext.Provider value={contextValue}>
      {children}
    </CrashAnalyticsContext.Provider>
  )
}
