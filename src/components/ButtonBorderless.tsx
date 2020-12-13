import React from 'react'
import { Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

type Props = {
  androidRippleColour?: string
  iosActiveOpacity?: number
  onPress: () => void
  title: string
}

export const ButtonBorderless: React.FC<Props> = ({
  androidRippleColour,
  iosActiveOpacity,
  onPress,
  title,
}) => (
  <BorderlessButton
    activeOpacity={iosActiveOpacity}
    onPress={onPress}
    rippleColor={androidRippleColour}
  >
    <Text>{title}</Text>
  </BorderlessButton>
)
