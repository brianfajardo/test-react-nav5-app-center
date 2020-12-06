import React, {useEffect, useState} from 'react';
import {localStorage} from '../modules';
import {LSKeys} from '../types';

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
    await localStorage.set(LSKeys.User, fakeUser);
    setUser(fakeUser);
  };

  const logout = async () => {
    await localStorage.remove(LSKeys.User);
    setUser(null);
  };

  const contextValue = {
    user,
    loading,
    login,
    logout,
  };

  useEffect(() => {
    localStorage
      .get(LSKeys.User)
      .then((userData) => setUser(userData))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
