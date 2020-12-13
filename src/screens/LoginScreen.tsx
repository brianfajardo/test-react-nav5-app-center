import { StackNavigationProp } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Text } from 'react-native'
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'
import { AuthContext } from '../contexts/AuthProvider'
import { CrashAnalyticsContext } from '../contexts/CrashAnalytics'
import { Center } from '../components/Center'
import { CrashAlertModal } from '../components/CrashAlertModal'
import { AuthStackParamList, Routes } from '../types/navigation'

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, Routes.Login>
}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { login } = useContext(AuthContext)
  const { lastSessionCrashed, resetLastSessionCrashed } = useContext(
    CrashAnalyticsContext,
  )

  const onRegisterScreenButtonPress = () => {
    navigation.navigate(Routes.Register)

    Analytics.trackEvent('button press', {
      button: 'register',
      onScreen: Routes.Login,
    })
  }

  const onCrashButtonPress = () => {
    Crashes.generateTestCrash()

    Analytics.trackEvent('button press', {
      button: 'crash',
      onScreen: Routes.Login,
    })
  }

  return (
    <>
      <CrashAlertModal
        visible={lastSessionCrashed}
        onConfirm={resetLastSessionCrashed}
      />
      <Center>
        <Text>Login Screen</Text>
        <Button title={Routes.Login} onPress={login} />
        <Button
          title="Navigate to Register screen"
          onPress={onRegisterScreenButtonPress}
        />
        <Button title="Crash" onPress={onCrashButtonPress} />
      </Center>
    </>
  )
}
