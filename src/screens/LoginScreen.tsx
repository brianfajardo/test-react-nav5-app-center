import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthContext } from '../contexts/AuthProvider'
import { Center } from '../components/Center'
import { CrashAlertModal } from '../components/CrashAlertModal'
import { AuthStackParamList, Routes } from '../types/navigation'
import { ButtonBorderless } from '../components/ButtonBorderless'
import { Button } from '../components/Button'
import { Divider } from '../components/Divider'

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, Routes.Login>
}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { login } = useContext(AuthContext)

  const onLoginButtonPress = () => {
    login()

    Analytics.trackEvent('button press', {
      button: 'login',
      onScreen: Routes.Login,
    })
  }

  const onRegisterButtonPress = () => {
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
      <CrashAlertModal />
      <Center>
        <Text style={styles.title}>🎉 Welcome 🎉</Text>
        <Divider />
        <ButtonBorderless title="Login" onPress={onLoginButtonPress} />
        <Divider />
        <ButtonBorderless title="Register" onPress={onRegisterButtonPress} />
        <Divider />
        <Button title="Test Crash" onPress={onCrashButtonPress} />
      </Center>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
