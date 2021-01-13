import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { LSKeys } from '../types/localStorage'

export const useAsyncStorage = (
  key: LSKeys,
  defaultValue: any = null,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) => {
  const [state, setState] = useState(() => {
    if (typeof defaultValue === 'function') {
      return defaultValue()
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    const getItem = async () => {
      const json = await AsyncStorage.getItem(key)

      if (json) {
        return setState(deserialize(json))
      }
    }

    getItem()
  }, [deserialize, key, setState])

  useEffect(() => {
    const setItem = async () =>
      await AsyncStorage.setItem(key, serialize(state))

    setItem()
  }, [key, serialize, state])

  return [state, setState]
}
