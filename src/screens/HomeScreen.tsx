import React, { useContext } from 'react'
import { RouteProp } from '@react-navigation/native'
import { Button, Text } from 'react-native'
import { Center } from '../components'
import { HomeTabsParamList, Routes } from '../types'
import { AuthContext } from '../contexts'

type Props = {
  route: RouteProp<HomeTabsParamList, Routes.Home>
}

export const HomeScreen: React.FC<Props> = ({ route }) => {
  const { logout } = useContext(AuthContext)

  return (
    <Center>
      <Text>{route.name} Screen</Text>
      <Button title="Logout" onPress={logout} />
    </Center>
  )
}
