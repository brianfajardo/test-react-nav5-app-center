import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeScreen} from '../screens';
import {HomeTabsParamList} from '../types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

interface HomeTabsProps {}

const Tabs = createBottomTabNavigator<HomeTabsParamList>();

export const HomeTabs: React.FC<HomeTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="Home" component={HomeScreen} />
    </Tabs.Navigator>
  );
};
