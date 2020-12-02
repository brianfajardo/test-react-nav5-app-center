import React from 'react';
import {Button, Text} from 'react-native';

import {Center} from '../components/Center';

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <Center>
      <Text>Login Screen</Text>
      <Button
        title="Navigate to Register screen"
        onPress={() => navigation.navigate('Register')}
      />
    </Center>
  );
};
