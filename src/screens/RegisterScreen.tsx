import React from 'react'
import { Button, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { Center } from '../components'
import { AuthStackParamList, Routes } from '../types'

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, Routes.Register>
  route: RouteProp<AuthStackParamList, Routes.Register>
}

export const RegisterScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <Center>
      <Text>{route.name} Screen</Text>
      <Button
        title="Navigate to Login"
        onPress={() => navigation.navigate(Routes.Login)}
      />
    </Center>
  )
}
