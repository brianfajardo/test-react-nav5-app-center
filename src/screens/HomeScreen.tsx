import React, { useContext } from 'react'
import { Button, Text } from 'react-native'
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'
import { Center, CrashAlertModal } from '../components'
import { Routes } from '../types'
import { AuthContext, CrashAnalyticsContext } from '../contexts'

export const HomeScreen: React.FC = () => {
  const { logout } = useContext(AuthContext)
  const { lastSessionCrashed, resetLastSessionCrashed } = useContext(
    CrashAnalyticsContext,
  )

  const onLogoutButtonPress = () => {
    logout()

    Analytics.trackEvent('button press', {
      button: 'logout',
      onScreen: Routes.Home,
    })
  }

  const onCrashButtonPress = () => {
    Crashes.generateTestCrash()

    Analytics.trackEvent('button press', {
      button: 'crash',
      onScreen: Routes.Home,
    })
  }

  return (
    <>
      <CrashAlertModal
        visible={lastSessionCrashed}
        onConfirm={resetLastSessionCrashed}
      />
      <Center>
        <Text>Home Screen</Text>
        <Button title="Logout" onPress={onLogoutButtonPress} />
        <Button title="Crash" onPress={onCrashButtonPress} />
      </Center>
    </>
  )
}
