import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'
import { AuthContext } from '../../contexts/AuthProvider'
import { FriendsScreen } from '../../screens/FriendsScreen'
import { HomeStackParamList, Routes } from '../../types/navigation'
import { FriendScreen } from '../../screens/FriendScreen'
import { getFriendsScreenOptions } from '../options/friendsScreenOptions'

const Stack = createStackNavigator<HomeStackParamList>()

export const HomeStack: React.FC = () => {
  const { logout } = useContext(AuthContext)

  const testCrash = () => {
    Crashes.generateTestCrash()

    Analytics.trackEvent('button press', {
      button: 'crash',
      onScreen: Routes.Friends,
    })
  }

  const friendsScreenOptions = getFriendsScreenOptions({
    onHeaderLeftPress: testCrash,
    onHeaderRightPress: logout,
  })

  return (
    <Stack.Navigator initialRouteName={Routes.Friends}>
      <Stack.Screen
        name={Routes.Friends}
        component={FriendsScreen}
        options={friendsScreenOptions}
      />
      <Stack.Screen
        name={Routes.Friend}
        component={FriendScreen}
        options={({ route }) => ({
          headerTitle: route.params.name,
        })}
      />
    </Stack.Navigator>
  )
}
