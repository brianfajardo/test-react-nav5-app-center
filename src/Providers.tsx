import React from 'react';
import {AuthProvider} from './contexts';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({children}) => {
  return <AuthProvider>{children}</AuthProvider>;
};
