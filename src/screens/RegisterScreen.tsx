import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import Analytics from 'appcenter-analytics'
import { Center } from '../components/Center'
import { AuthStackParamList, Routes } from '../types/navigation'
import { ButtonBorderless } from '../components/ButtonBorderless'
import { Divider } from '../components/Divider'

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
      <Text style={styles.title}>Register Screen</Text>
      <Divider />
      <ButtonBorderless title="Back to login" onPress={onLoginButtonPress} />
    </Center>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
