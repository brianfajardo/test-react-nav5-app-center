import React from 'react'
import { View } from 'react-native'

type Props = {
  marginBottom?: number
}

export const Divider: React.FC<Props> = ({ marginBottom }) => {
  return <View style={{ marginBottom: marginBottom || 16 }} />
}
