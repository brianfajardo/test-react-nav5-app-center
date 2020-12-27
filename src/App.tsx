import 'react-native-gesture-handler'
import React from 'react'
import { Providers } from './Providers'
import { AppNavigator } from './AppNavigator'

export const App: React.FC = () => (
  <Providers>
    <AppNavigator />
  </Providers>
)
