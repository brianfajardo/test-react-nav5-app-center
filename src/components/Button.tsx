import React from 'react'
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

type Props = {
  androidRippleColour?: string
  iosActiveOpacity?: number
  iosExclusive?: boolean
  onPress: () => void
  style?: StyleProp<ViewStyle>
  title: string
  underlayColor?: string
}

export const Button: React.FC<Props> = ({
  androidRippleColour,
  iosActiveOpacity,
  iosExclusive,
  onPress,
  style,
  title,
  underlayColor,
}) => (
  <RectButton
    activeOpacity={iosActiveOpacity}
    exclusive={iosExclusive}
    onPress={onPress}
    rippleColor={androidRippleColour}
    style={[styles.button, style]}
    underlayColor={underlayColor}
  >
    <Text style={styles.text}>{title}</Text>
  </RectButton>
)

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderRadius: 8,
    paddingHorizontal: 20,
    backgroundColor: '#F194FF',
  },
  text: {
    color: 'white',
  },
})
