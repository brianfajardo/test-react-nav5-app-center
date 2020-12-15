import React from 'react'
import { Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RouteProp } from '@react-navigation/native'
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { HomeStack } from '../stacks/HomeStack'
import { SearchScreen } from '../../screens/SearchScreen'
import { HomeTabsParamList, Routes } from '../../types/navigation'

type HomeTabsScreenOptions = ({
  route,
}: {
  route: RouteProp<HomeTabsParamList, Routes.Home>
}) => BottomTabNavigationOptions

const Tabs = createBottomTabNavigator<HomeTabsParamList>()

export const HomeTabs: React.FC = () => {
  const screenOptions: HomeTabsScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = 'bug'

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
    tabStyle: {
      padding: Platform.select({ ios: 0, android: 2 }),
    },
  }

  return (
    <Tabs.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      <Tabs.Screen name={Routes.Home} component={HomeStack} />
      <Tabs.Screen name={Routes.Search} component={SearchScreen} />
    </Tabs.Navigator>
  )
}
