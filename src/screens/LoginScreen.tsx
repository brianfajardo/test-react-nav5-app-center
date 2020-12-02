import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text} from 'react-native';

import {Center} from '../components/Center';
import {RootStackParamList} from '../types/RootStackParamList';

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
  route: RouteProp<RootStackParamList, 'Login'>;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <Center>
      <Text>{route.name} Screen</Text>
      <Button
        title="Navigate to Register screen"
        onPress={() => navigation.navigate('Login')}
      />
    </Center>
  );
};
