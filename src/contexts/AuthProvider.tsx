import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type User = null | {username: string};

type AuthContext = {
  user: User;
  loading: boolean;
  login: () => void;
  logout: () => void;
};

interface AuthProviderProps {}

export const AuthContext = React.createContext<AuthContext>({
  user: null,
  loading: true,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const login = async () => {
    const fakeUser = {username: 'Santa'};
    await AsyncStorage.setItem('user', JSON.stringify(fakeUser));
    setUser(fakeUser);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  const contextValue = {
    user,
    loading,
    login,
    logout,
  };

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then((userJson) => setUser(JSON.parse(userJson)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
