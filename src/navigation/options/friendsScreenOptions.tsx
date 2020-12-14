import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack'
import { ButtonBorderless } from '../../components/ButtonBorderless'
import { StyleSheet } from 'react-native'

type HeaderPress = () => void

type FriendsScreenOptions = ({
  onHeaderLeftPress,
  onHeaderRightPress,
}: {
  onHeaderLeftPress: HeaderPress
  onHeaderRightPress: HeaderPress
}) => StackNavigationOptions

const styles = StyleSheet.create({
  headerLeftContainer: {
    paddingLeft: 8,
  },
  headerRightContainer: {
    paddingRight: 8,
  },
  headerRightText: {
    color: 'red',
  },
})

const headerLeftOptions = (onPress: HeaderPress): StackNavigationOptions => ({
  headerLeft: () => <ButtonBorderless title="Test crash" onPress={onPress} />,
  headerLeftContainerStyle: styles.headerLeftContainer,
})

const headerRightOptions = (onPress: HeaderPress): StackNavigationOptions => ({
  headerRight: () => (
    <ButtonBorderless
      title="Logout"
      onPress={onPress}
      textStyle={styles.headerRightText}
    />
  ),
  headerRightContainerStyle: styles.headerRightContainer,
})

export const getFriendsScreenOptions: FriendsScreenOptions = ({
  onHeaderLeftPress,
  onHeaderRightPress,
}) => ({
  ...headerLeftOptions(onHeaderLeftPress),
  ...headerRightOptions(onHeaderRightPress),
})
