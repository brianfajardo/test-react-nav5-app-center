import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {Button, Text} from 'react-native';
import {Center} from '../components';
import {AuthContext} from '../contexts';
import {RootStackParamList} from '../types';

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
  route: RouteProp<RootStackParamList, 'Login'>;
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
