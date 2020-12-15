import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'
import { AuthContext } from '../../contexts/AuthProvider'
import { FriendsScreen } from '../../screens/FriendsScreen'
import { HomeStackParamList, Routes } from '../../types/navigation'
import { FriendScreen } from '../../screens/FriendScreen'
import { ButtonBorderless } from '../../components/ButtonBorderless'
import { StyleSheet } from 'react-native'

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

  const friendsScreenOptions = {
    headerLeft: () => (
      <ButtonBorderless title="Test crash" onPress={testCrash} />
    ),
    headerRight: () => (
      <ButtonBorderless
        title="Logout"
        onPress={logout}
        textStyle={styles.friendsHeaderRightText}
      />
    ),
    headerLeftContainerStyle: styles.friendsHeaderLeftContainer,
    headerRightContainerStyle: styles.friendsHeaderRightContainer,
  }

  return (
    <Stack.Navigator
      initialRouteName={Routes.Friends}
      screenOptions={{ headerTitleAlign: 'center' }}
    >
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

const styles = StyleSheet.create({
  friendsHeaderLeftContainer: {
    paddingLeft: 8,
  },
  friendsHeaderRightContainer: {
    paddingRight: 8,
  },
  friendsHeaderRightText: {
    color: 'red',
  },
})
