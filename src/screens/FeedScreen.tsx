import React, { useContext } from 'react'
import { Text } from 'react-native'
import { CrashAnalyticsContext } from '../contexts/CrashAnalytics'
import { Center } from '../components/Center'
import { CrashAlertModal } from '../components/CrashAlertModal'

export const FeedScreen: React.FC = () => {
  const { lastSessionCrashed, resetLastSessionCrashed } = useContext(
    CrashAnalyticsContext,
  )

  return (
    <>
      <CrashAlertModal
        visible={lastSessionCrashed}
        onConfirm={resetLastSessionCrashed}
      />
      <Center>
        <Text>Feed Screen</Text>
      </Center>
    </>
  )
}
