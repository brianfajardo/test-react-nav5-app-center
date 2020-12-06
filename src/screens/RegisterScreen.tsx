import React from 'react';
import {Button, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Center} from '../components';
import {AuthStackParamList} from '../types';

interface RegisterScreenProps {
  navigation: StackNavigationProp<AuthStackParamList, 'Register'>;
  route: RouteProp<AuthStackParamList, 'Register'>;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <Center>
      <Text>{route.name} Screen</Text>
      <Button
        title="Navigate to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </Center>
  );
};
