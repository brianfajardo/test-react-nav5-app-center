import React from 'react'
import { Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Route } from '@react-navigation/native'
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { HomeStack } from '../stacks/HomeStack'
import { SearchScreen } from '../../screens/SearchScreen'
import { HomeTabsParamList, Routes } from '../../types/navigation'

const Tabs = createBottomTabNavigator<HomeTabsParamList>()

type DefaultScreenOptions = (props: {
  route: Route<Routes.Home | Routes.Search>
}) => BottomTabNavigationOptions

export const HomeTabs: React.FC = () => {
  const defaultScreenOptions: DefaultScreenOptions = ({ route }) => ({
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

  const defaultTabBarOptions: BottomTabBarOptions = {
    activeTintColor: '#444444',
    inactiveTintColor: 'gray',
    tabStyle: {
      padding: Platform.select({ ios: 0, android: 2 }),
    },
  }

  return (
    <Tabs.Navigator
      screenOptions={defaultScreenOptions}
      tabBarOptions={defaultTabBarOptions}
    >
      <Tabs.Screen name={Routes.Home} component={HomeStack} />
      <Tabs.Screen name={Routes.Search} component={SearchScreen} />
    </Tabs.Navigator>
  )
}
