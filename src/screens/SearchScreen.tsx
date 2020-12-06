import React from 'react';
import {Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Center} from '../components';
import {HomeTabsParamList} from '../types';

interface SearchScreenProps {
  route: RouteProp<HomeTabsParamList, 'Search'>;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({route}) => {
  return (
    <Center>
      <Text>{route.name} Screen</Text>
    </Center>
  );
};
