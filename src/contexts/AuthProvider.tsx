import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';

type User = null | {username: string};

type AuthContext = {
  user: User;
  login: () => void;
  logout: () => void;
};

interface AuthProviderProps {}

export const AuthContext = React.createContext<AuthContext>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>(null);

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
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
