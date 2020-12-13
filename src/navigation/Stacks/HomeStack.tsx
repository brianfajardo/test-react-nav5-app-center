import React, { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'
import { AuthContext } from '../../contexts/AuthProvider'
import { FeedScreen } from '../../screens/FeedScreen'
import { HomeStackParamList, Routes } from '../../types/navigation'

const Stack = createStackNavigator<HomeStackParamList>()

export const HomeStack: React.FC = () => {
  const { logout } = useContext(AuthContext)

  const onTestCrashButtonPress = () => {
    Crashes.generateTestCrash()

    Analytics.trackEvent('button press', {
      button: 'crash',
      onScreen: Routes.Feed,
    })
  }

  const feedScreenOptions: StackNavigationOptions = {
    headerLeft: () => (
      <TouchableOpacity onPress={onTestCrashButtonPress}>
        <Text>Crash</Text>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    ),
  }

  return (
    <Stack.Navigator initialRouteName={Routes.Feed}>
      <Stack.Screen
        name={Routes.Feed}
        component={FeedScreen}
        options={feedScreenOptions}
      />
    </Stack.Navigator>
  )
}
