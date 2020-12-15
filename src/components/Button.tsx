import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
  TouchableHighlight,
} from 'react-native'

type Props = {
  activeOpacity?: number
  onPress: () => void
  style?: StyleProp<ViewStyle>
  title: string
  underlayColor?: string
}

export const Button: React.FC<Props> = ({
  activeOpacity,
  onPress,
  style,
  title,
  underlayColor,
}) => (
  <TouchableHighlight
    activeOpacity={activeOpacity}
    onPress={onPress}
    style={[styles.button, style]}
    underlayColor={underlayColor}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableHighlight>
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
