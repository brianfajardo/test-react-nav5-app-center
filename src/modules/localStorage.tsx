import AsyncStorage from '@react-native-community/async-storage';

export default {
  set: async (key: string, value: any) => {
    try {
      const jsonValue =
        typeof value === 'string' ? value : JSON.stringify(value);

      await AsyncStorage.setItem(key, jsonValue);
    } catch (err) {
      console.error(err);
    }
  },
  get: async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (err) {
      console.error(err);
    }
  },
  remove: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.error(err);
    }
  },
};
