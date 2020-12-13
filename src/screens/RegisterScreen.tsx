import React from 'react'
import { Button, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import Analytics from 'appcenter-analytics'
import { Center } from '../components'
import { AuthStackParamList, Routes } from '../types'

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, Routes.Register>
}

export const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const onLoginButtonPress = () => {
    navigation.navigate(Routes.Login)

    Analytics.trackEvent('button press', {
      button: 'login',
      onScreen: Routes.Register,
    })
  }

  return (
    <Center>
      <Text>Register Screen</Text>
      <Button title="Navigate to Login" onPress={onLoginButtonPress} />
    </Center>
  )
}
