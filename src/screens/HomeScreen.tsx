import React, {useContext} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Button, Text} from 'react-native';
import {Center} from '../components';
import {HomeStackParamList} from '../types';
import {AuthContext} from '../contexts';

interface HomeScreenProps {
  route: RouteProp<HomeStackParamList, 'Home'>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({route}) => {
  const {logout} = useContext(AuthContext);

  return (
    <Center>
      <Text>{route.name} Screen</Text>
      <Button title="Logout" onPress={logout} />
    </Center>
  );
};
