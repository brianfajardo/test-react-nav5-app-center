import React from 'react';
import {AuthProvider} from './contexts/AuthProvider';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({children}) => {
  return <AuthProvider>{children}</AuthProvider>;
};
