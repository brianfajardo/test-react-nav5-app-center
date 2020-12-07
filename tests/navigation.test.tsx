import React from 'react'
import {
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react-native'
import { App } from '../App'
import AsyncStorage from '@react-native-community/async-storage'

describe('Navigation', () => {
  describe('auth', () => {
    beforeEach(async () => await AsyncStorage.clear())

    const loadingMsg = 'One sec, making sure you exist.'

    it('should render the Login screen if the user is not authenticated', async () => {
      const screen = render(<App />)

      await waitForElementToBeRemoved(() => screen.getByText(loadingMsg))

      expect(screen.getByText('Login Screen')).toBeDefined()
    })

    it('should render the Home screen if the user is authenticated', async () => {
      //  FIXME: Adding await causes console error to appear:
      //  "Warning: You called act(async () => ...) without await."
      AsyncStorage.setItem('user', JSON.stringify({ username: 'Santa' }))

      const screen = render(<App />)

      await waitForElementToBeRemoved(() => screen.getByText(loadingMsg))

      expect(screen.getByText('Home Screen')).toBeDefined()
    })
  })
})
