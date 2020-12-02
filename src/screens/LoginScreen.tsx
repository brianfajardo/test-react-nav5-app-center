import React from 'react';
import {Text} from 'react-native';

import {Center} from '../components/Center';

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  return (
    <Center>
      <Text>Login Screen</Text>
    </Center>
  );
};
