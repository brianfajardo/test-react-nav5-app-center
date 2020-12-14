import React, { useCallback, useMemo } from 'react'
import faker from 'faker'
import { StackNavigationProp } from '@react-navigation/stack'
import { CrashAlertModal } from '../components/CrashAlertModal'
import { FriendsList } from '../components/FriendsList'
import { HomeStackParamList, Routes } from '../types/navigation'

type Props = {
  navigation: StackNavigationProp<HomeStackParamList, Routes.Friends>
}

const getFakeUserData = (): Faker.UserCard[] =>
  Array.from(Array(150), () => faker.helpers.userCard())

export const FriendsScreen: React.FC<Props> = ({ navigation }) => {
  const fakeData = useMemo(getFakeUserData, [])

  const onFriendRowPress = useCallback((friend: Faker.UserCard) => {
    navigation.navigate(Routes.Friend, { name: friend.name })
  }, [])

  return (
    <>
      <CrashAlertModal />
      <FriendsList data={fakeData} onRowPress={onFriendRowPress} />
    </>
  )
}
