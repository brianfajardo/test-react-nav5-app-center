import React, { useContext } from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { AuthContext } from './contexts/AuthProvider'
import { AuthStack } from './navigation/stacks/AuthStack'
import { HomeTabs } from './navigation/tabs/HomeTabs'
import { Center } from './components/Center'

export const AppNavigator: React.FC = () => {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <Center>
        <Text>One sec, making sure you exist.</Text>
        <ActivityIndicator size="large" />
      </Center>
    )
  }

  return user ? <HomeTabs /> : <AuthStack />
}
