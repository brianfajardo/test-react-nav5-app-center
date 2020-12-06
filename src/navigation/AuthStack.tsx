import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {AuthStackParamList, Routes} from '../types';
import {LoginScreen, RegisterScreen} from '../screens';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  const screenOptions: StackNavigationOptions = {
    header: () => null,
  };

  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={screenOptions}>
      <Stack.Screen name={Routes.Login} component={LoginScreen} />
      <Stack.Screen name={Routes.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
