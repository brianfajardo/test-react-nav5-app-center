import React, { useContext } from 'react'
import { RouteProp } from '@react-navigation/native'
import { Button, Text } from 'react-native'
import Crashes from 'appcenter-crashes'
import { Center, CrashAlertModal } from '../components'
import { HomeTabsParamList, Routes } from '../types'
import { AuthContext, CrashAnalyticsContext } from '../contexts'

type Props = {
  route: RouteProp<HomeTabsParamList, Routes.Home>
}

export const HomeScreen: React.FC<Props> = ({ route }) => {
  const { logout } = useContext(AuthContext)
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
        <Text>{route.name} Screen</Text>
        <Button title="Logout" onPress={logout} />
        <Button title="Crash" onPress={() => Crashes.generateTestCrash()} />
      </Center>
    </>
  )
}
