import 'react-native-gesture-handler'
import React from 'react'
import { Providers } from './src/Providers'
import { Routes } from './src/Routes'

type Props = Record<string, never>

export const App: React.FC<Props> = () => (
  <Providers>
    <Routes />
  </Providers>
)
