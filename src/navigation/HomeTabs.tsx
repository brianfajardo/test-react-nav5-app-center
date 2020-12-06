import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HomeScreen, SearchScreen } from '../screens'
import { HomeTabsParamList } from '../types'
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'
import { Routes } from '../types'

type Props = Record<string, never>

type HomeTabsScreenOptions = ({
  route,
}: {
  route: RouteProp<HomeTabsParamList, Routes.Home>
}) => BottomTabNavigationOptions

const Tabs = createBottomTabNavigator<HomeTabsParamList>()

export const HomeTabs: React.FC<Props> = () => {
  const screenOptions: HomeTabsScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName

      if (route.name === Routes.Home) {
        iconName = focused ? 'home' : 'home-outline'
      } else if (route.name === Routes.Search) {
        iconName = focused ? 'rocket' : 'rocket-outline'
      }

      return <Ionicons name={iconName} size={size} color={color} />
    },
  })

  const tabBarOptions: BottomTabBarOptions = {
    activeTintColor: '#444444',
    inactiveTintColor: 'gray',
  }

  return (
    <Tabs.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      <Tabs.Screen name={Routes.Home} component={HomeScreen} />
      <Tabs.Screen name={Routes.Search} component={SearchScreen} />
    </Tabs.Navigator>
  )
}
