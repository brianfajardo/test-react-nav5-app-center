import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {Button, Text} from 'react-native';
import {Center} from '../components';
import {AuthContext} from '../contexts';
import {AuthStackParamList} from '../types';

interface LoginScreenProps {
  navigation: StackNavigationProp<AuthStackParamList, 'Login'>;
  route: RouteProp<AuthStackParamList, 'Login'>;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  navigation,
  route,
}) => {
  const {login} = useContext(AuthContext);

  return (
    <Center>
      <Text>{route.name} Screen</Text>
      <Button title="Login" onPress={login} />
      <Button
        title="Navigate to Register screen"
        onPress={() => navigation.navigate('Register')}
      />
    </Center>
  );
};
