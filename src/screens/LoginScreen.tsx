import { StackNavigationProp } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Text } from 'react-native'
import { Center, CrashAlertModal } from '../components'
import { AuthContext, CrashAnalyticsContext } from '../contexts'
import { AuthStackParamList, Routes } from '../types'
import Crashes from 'appcenter-crashes'

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, Routes.Login>
}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { login } = useContext(AuthContext)
  const { lastSessionCrashed, resetLastSessionCrashed } = useContext(
    CrashAnalyticsContext,
  )

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
          onPress={() => navigation.navigate(Routes.Register)}
        />
        <Button title="Crash" onPress={() => Crashes.generateTestCrash()} />
      </Center>
    </>
  )
}
