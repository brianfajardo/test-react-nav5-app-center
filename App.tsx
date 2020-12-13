import 'react-native-gesture-handler'
import React from 'react'
import { Providers } from './src/Providers'
import { Routes } from './src/Routes'

export const App: React.FC = () => (
  <Providers>
    <Routes />
  </Providers>
)
