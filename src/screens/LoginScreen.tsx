import { StackNavigationProp } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Text } from 'react-native'
import { Center } from '../components'
import { AuthContext } from '../contexts'
import { AuthStackParamList, Routes } from '../types'

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, Routes.Login>
}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { login } = useContext(AuthContext)

  return (
    <Center>
      <Text>Login Screen</Text>
      <Button title={Routes.Login} onPress={login} />
      <Button
        title="Navigate to Register screen"
        onPress={() => navigation.navigate(Routes.Register)}
      />
    </Center>
  )
}
