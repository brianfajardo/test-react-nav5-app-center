import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'
import { AuthContext } from '../../contexts/AuthProvider'
import { FriendsScreen } from '../../screens/FriendsScreen'
import { ButtonBorderless } from '../../components/ButtonBorderless'
import { HomeStackParamList, Routes } from '../../types/navigation'

const Stack = createStackNavigator<HomeStackParamList>()

export const HomeStack: React.FC = () => {
  const { logout } = useContext(AuthContext)

  const onTestCrashButtonPress = () => {
    Crashes.generateTestCrash()

    Analytics.trackEvent('button press', {
      button: 'crash',
      onScreen: Routes.Friends,
    })
  }

  const friendsScreenHeaderLeft: StackNavigationOptions = {
    headerLeft: () => (
      <ButtonBorderless title="Test crash" onPress={onTestCrashButtonPress} />
    ),
    headerLeftContainerStyle: styles.headerLeftContainer,
  }

  const friendsScreenHeaderRight: StackNavigationOptions = {
    headerRight: () => (
      <ButtonBorderless
        title="Logout"
        onPress={logout}
        textStyle={styles.headerLeftText}
      />
    ),
    headerRightContainerStyle: styles.headerRightContainer,
  }

  const friendsScreenOptions = {
    ...friendsScreenHeaderLeft,
    ...friendsScreenHeaderRight,
  }

  return (
    <Stack.Navigator initialRouteName={Routes.Friends}>
      <Stack.Screen
        name={Routes.Friends}
        component={FriendsScreen}
        options={friendsScreenOptions}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerLeftContainer: {
    paddingLeft: 8,
  },
  headerRightContainer: {
    paddingRight: 8,
  },
  headerLeftText: {
    color: 'red',
  },
})
