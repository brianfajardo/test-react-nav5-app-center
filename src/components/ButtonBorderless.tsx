import React from 'react'
import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

type Props = {
  androidRippleColour?: string
  containerStyle?: StyleProp<ViewStyle>
  iosActiveOpacity?: number
  onPress: () => void
  textStyle?: StyleProp<TextStyle>
  title: string
}

export const ButtonBorderless: React.FC<Props> = ({
  androidRippleColour,
  containerStyle,
  iosActiveOpacity,
  onPress,
  textStyle,
  title,
}) => (
  <BorderlessButton
    activeOpacity={iosActiveOpacity}
    onPress={onPress}
    rippleColor={androidRippleColour}
    style={containerStyle}
  >
    <Text style={textStyle}>{title}</Text>
  </BorderlessButton>
)
