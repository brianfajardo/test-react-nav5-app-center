import React from 'react'
import { render } from '@testing-library/react-native'
import { Routes } from '../src/Routes'
import { AuthContext } from '../src/contexts/AuthProvider'
import { act } from 'react-test-renderer'

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
          {children}
        </AuthContext.Provider>
      )

      const screen = render(<Routes />, { wrapper })

      await act(async () =>
        expect(screen.getByText('Login Screen')).toBeDefined(),
      )
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
          {children}
        </AuthContext.Provider>
      )

      const screen = render(<Routes />, { wrapper })

      await act(async () => expect(screen.getByText('Friends')).toBeDefined())
    })
  })
})
