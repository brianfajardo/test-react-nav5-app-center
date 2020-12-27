import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react-native'
import { AppNavigator } from '../src/AppNavigator'
import { AuthContext, AuthProvider } from '../src/contexts/AuthProvider'
import { NavigationContainer } from '@react-navigation/native'

afterEach(cleanup)

describe('Navigation', () => {
  describe('auth', () => {
    it('should navigate to Login screen if the user is not authenticated', async () => {
      const providerProps = {
        loading: false,
        user: null,
        login: () => {},
        logout: () => {},
      }

      const wrapper = ({ children }) => (
        <AuthContext.Provider value={providerProps}>
          <NavigationContainer>{children}</NavigationContainer>
        </AuthContext.Provider>
      )

      const screen = render(<AppNavigator />, { wrapper })
      const loginScreenTitle = await screen.findByText('🎉 Welcome 🎉')

      expect(loginScreenTitle).toBeTruthy()
    })

    it('should navigate to Friends screen if the user is authenticated', async () => {
      const providerProps = {
        loading: false,
        user: { username: 'Santa' },
        login: () => {},
        logout: () => {},
      }

      const wrapper = ({ children }) => (
        <AuthContext.Provider value={providerProps}>
          <NavigationContainer>{children}</NavigationContainer>
        </AuthContext.Provider>
      )

      const screen = render(<AppNavigator />, { wrapper })
      const friendsScreenTitle = await screen.findByText('Friends')

      expect(friendsScreenTitle).toBeTruthy()
    })
  })

  describe('bottom tabs', () => {
    it('should navigate to Friends screen when the home tab is pressed', async () => {
      const providerProps = {
        loading: false,
        user: { username: 'Santa' },
        login: () => {},
        logout: () => {},
      }

      const wrapper = ({ children }) => (
        <AuthContext.Provider value={providerProps}>
          <NavigationContainer>{children}</NavigationContainer>
        </AuthContext.Provider>
      )

      const screen = render(<AppNavigator />, { wrapper })
      const homeTab = await screen.findByText('Home')

      fireEvent(homeTab, 'press')

      const friendsScreenTitle = screen.getByText('Friends')

      expect(homeTab).toBeTruthy()
      expect(friendsScreenTitle).toBeTruthy()
    })

    it('should navigate to Search screen when the search tab is pressed', async () => {
      const providerProps = {
        loading: false,
        user: { username: 'Santa' },
        login: () => {},
        logout: () => {},
      }

      const wrapper = ({ children }) => (
        <AuthContext.Provider value={providerProps}>
          <NavigationContainer>{children}</NavigationContainer>
        </AuthContext.Provider>
      )

      const screen = render(<AppNavigator />, { wrapper })
      const searchTab = await screen.findByText('Search')

      fireEvent(searchTab, 'press')

      const searchScreenTitle = screen.getByText('Search Screen')

      expect(searchTab).toBeTruthy()
      expect(searchScreenTitle).toBeTruthy()
    })
  })

  describe('screens', () => {
    describe('Login', () => {
      it('should navigate to Friends screen when the login button is pressed', async () => {
        const wrapper = ({ children }) => (
          <AuthProvider>
            <NavigationContainer>{children}</NavigationContainer>
          </AuthProvider>
        )

        const screen = render(<AppNavigator />, { wrapper })

        const loginButton = await screen.findByText('Login')

        fireEvent(loginButton, 'press')

        const friendsScreenTitle = await screen.findByText('Friends')

        expect(loginButton).toBeTruthy()
        expect(friendsScreenTitle).toBeTruthy()
      })

      it('should navigate to Register screen when the register button is pressed', async () => {
        const providerProps = {
          loading: false,
          user: null,
          login: () => {},
          logout: () => {},
        }

        const wrapper = ({ children }) => (
          <AuthContext.Provider value={providerProps}>
            <NavigationContainer>{children}</NavigationContainer>
          </AuthContext.Provider>
        )

        const screen = render(<AppNavigator />, { wrapper })

        const registerButton = await screen.findByText('Register')

        fireEvent(registerButton, 'press')

        const registerScreenTitle = await screen.findByText('Register Screen')

        expect(registerButton).toBeTruthy()
        expect(registerScreenTitle).toBeTruthy()
      })
    })
  })
})
