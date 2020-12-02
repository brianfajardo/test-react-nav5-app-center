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

  // Simulate an async request with setTimeout to grab the user
  const login = () =>
    setTimeout(() => {
      const fakeUser = {username: 'Santa'};
      setUser(fakeUser);
    }, 500);

  const logout = () => setUser(null);

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
