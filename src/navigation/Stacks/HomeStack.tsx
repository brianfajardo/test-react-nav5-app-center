import React, { useContext } from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'
import { AuthContext } from '../../contexts/AuthProvider'
import { FeedScreen } from '../../screens/FeedScreen'
import { HomeStackParamList, Routes } from '../../types/navigation'
import { ButtonBorderless } from '../../components/ButtonBorderless'

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
      <ButtonBorderless title="Test Crash" onPress={onTestCrashButtonPress} />
    ),
    headerRight: () => <ButtonBorderless title="Logout" onPress={logout} />,
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
