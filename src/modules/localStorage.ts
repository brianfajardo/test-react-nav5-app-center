import AsyncStorage from '@react-native-community/async-storage'
import { LSKeys } from '../types'

export default {
  set: async (key: LSKeys, value: any): Promise<void> => {
    try {
      const jsonValue =
        typeof value === 'string' ? value : JSON.stringify(value)

      await AsyncStorage.setItem(key, jsonValue)
    } catch (err) {
      console.error(err)
    }
  },
  get: async (key: LSKeys): Promise<any> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return jsonValue !== null ? JSON.parse(jsonValue) : null
    } catch (err) {
      console.error(err)
    }
  },
  remove: async (key: LSKeys): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (err) {
      console.error(err)
    }
  },
}
