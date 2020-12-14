import React, { useContext } from 'react'
import faker from 'faker'
import { CrashAnalyticsContext } from '../contexts/CrashAnalytics'
import { CrashAlertModal } from '../components/CrashAlertModal'
import { FlatList } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { Button } from '../components/Button'

const FLATLIST_ROW_HEIGHT = 42

export const FeedScreen: React.FC = () => {
  const { lastSessionCrashed, resetLastSessionCrashed } = useContext(
    CrashAnalyticsContext,
  )

  const flatListFakeData: Faker.UserCard[] = Array.from(Array(1000), () =>
    faker.helpers.userCard(),
  )

  const flatListKeyExtractor = (user: Faker.UserCard, idx: number) =>
    `${idx}-${user.username}`

  const flatListGetItemLayout = (_data, idx: number) => ({
    length: FLATLIST_ROW_HEIGHT,
    offset: FLATLIST_ROW_HEIGHT * idx,
    index: idx,
  })

  const flatListRenderItem = ({ item }: { item: Faker.UserCard }) => (
    <Button
      title={item.name}
      onPress={() => console.log('press')}
      style={styles.flatListRow}
    />
  )

  return (
    <>
      <CrashAlertModal
        visible={lastSessionCrashed}
        onConfirm={resetLastSessionCrashed}
      />
      <FlatList
        data={flatListFakeData}
        initialNumToRender={18}
        getItemLayout={flatListGetItemLayout}
        keyExtractor={flatListKeyExtractor}
        maxToRenderPerBatch={15}
        renderItem={flatListRenderItem}
        removeClippedSubviews={true}
        style={styles.flatList}
        windowSize={3}
      />
    </>
  )
}

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
  },
  flatListRow: { height: FLATLIST_ROW_HEIGHT, flex: 1, borderRadius: 0 },
})
