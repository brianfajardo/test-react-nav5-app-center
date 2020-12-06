import React from 'react'
import { Text } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { Center } from '../components'
import { HomeTabsParamList, Routes } from '../types'

type Props = {
  route: RouteProp<HomeTabsParamList, Routes.Search>
}

export const SearchScreen: React.FC<Props> = ({ route }) => {
  return (
    <Center>
      <Text>{route.name} Screen</Text>
    </Center>
  )
}
