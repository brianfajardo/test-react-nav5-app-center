import AsyncStorage from '@react-native-community/async-storage';
import {LSKeys} from '../types';

export default {
  set: async (key: LSKeys, value: any) => {
    try {
      const jsonValue =
        typeof value === 'string' ? value : JSON.stringify(value);

      await AsyncStorage.setItem(key, jsonValue);
    } catch (err) {
      console.error(err);
    }
  },
  get: async (key: LSKeys) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (err) {
      console.error(err);
    }
  },
  remove: async (key: LSKeys) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.error(err);
    }
  },
};
