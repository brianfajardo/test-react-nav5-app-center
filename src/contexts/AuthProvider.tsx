import React, {useEffect, useState} from 'react';
import {localStorage} from '../modules';

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
    await localStorage.set('user', fakeUser);
    setUser(fakeUser);
  };

  const logout = async () => {
    await localStorage.remove('user');
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
      .get('user')
      .then((userData) => setUser(userData))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
