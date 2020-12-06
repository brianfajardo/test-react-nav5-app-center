import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {
  children: ReactNode
}

export const Center: React.FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
