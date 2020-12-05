import React, {useContext} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types/RootStackParamList';
import {AuthContext} from './contexts';
import {Center} from './components';
import {LoginScreen, RegisterScreen, HomeScreen} from './screens';

interface RoutesProps {}

const AuthStack = createStackNavigator<RootStackParamList>();
const HomeStack = createStackNavigator<RootStackParamList>();

export const Routes: React.FC<RoutesProps> = ({}) => {
  const {user, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <Center>
        <Text>One sec, making sure you exist.</Text>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <HomeStack.Navigator initialRouteName="Login">
          <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Register" component={RegisterScreen} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};
