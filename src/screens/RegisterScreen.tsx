import React from 'react';
import {Button, Text} from 'react-native';

import {Center} from '../components/Center';

interface RegisterScreenProps {}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  return (
    <Center>
      <Text>Register Screen</Text>
      <Button
        title="Navigate to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </Center>
  );
};
