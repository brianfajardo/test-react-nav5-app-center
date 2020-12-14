import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Button } from './Button'

type Props = {
  data: Faker.UserCard[]
  onRowPress: (friend: Faker.UserCard) => void
}

const FLATLIST_ROW_HEIGHT = 42

export const FriendsList: React.FC<Props> = ({ data, onRowPress }) => {
  const flatListKeyExtractor = (user: Faker.UserCard, idx: number) =>
    `${idx}-${user.username}`

  const flatListGetItemLayout = (_data: any, idx: number) => ({
    length: FLATLIST_ROW_HEIGHT,
    offset: FLATLIST_ROW_HEIGHT * idx,
    index: idx,
  })

  const flatListRenderItem = ({ item: friend }: { item: Faker.UserCard }) => (
    <Button
      title={friend.name}
      onPress={() => onRowPress(friend)}
      style={styles.flatListRow}
    />
  )

  return (
    <FlatList
      data={data}
      initialNumToRender={18}
      getItemLayout={flatListGetItemLayout}
      keyExtractor={flatListKeyExtractor}
      maxToRenderPerBatch={15}
      renderItem={flatListRenderItem}
      removeClippedSubviews={true}
      style={styles.flatList}
      windowSize={3}
    />
  )
}

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
  },
  flatListRow: { height: FLATLIST_ROW_HEIGHT, flex: 1, borderRadius: 0 },
})
