import React, { useContext } from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './contexts'
import { Center } from './components'
import { HomeTabs, AuthStack } from './navigation'

export const Routes: React.FC = () => {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <Center>
        <Text>One sec, making sure you exist.</Text>
        <ActivityIndicator size="large" />
      </Center>
    )
  }

  return (
    <NavigationContainer>
      {user ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}
