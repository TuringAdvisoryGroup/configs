import { useBreakpointValue } from 'native-base'
import { PropsWithChildren } from 'react'
import { GestureResponderEvent, StyleProp, Text, TextStyle } from 'react-native'
import { fontStyles, responsiveFontStyles } from '../../styles'

export type TypographyVariant =
  | 'caption2'
  | 'caption1'
  | 'text4'
  | 'text3'
  | 'text2'
  | 'text1'
  | 'buttonText'
  | 'buttonMedium'
  | 'buttonLarge'
  | 'sub3'
  | 'sub2'
  | 'sub1'
  | 'h3'
  | 'h2'
  | 'h1'

export interface TypographyV2Props {
  variant: TypographyVariant
  style?: StyleProp<TextStyle>
  color?: string
  underline?: boolean
  numberOfLines?: number
  onPress?: (event: GestureResponderEvent) => void
  selectable?: boolean
  testID?: string
}

export const TypographyV2 = ({
  children,
  variant,
  style,
  color,
  numberOfLines,
  underline = false,
  selectable = true,
  testID,
  onPress,
}: PropsWithChildren<TypographyV2Props>) => {
  const styles = useBreakpointValue({
    base: responsiveFontStyles,
    xl: fontStyles,
  })
  return (
    <Text
      numberOfLines={numberOfLines}
      onPress={onPress}
      testID={testID}
      selectable={selectable}
      style={[
        styles[variant],
        style,
        // eslint-disable-next-line react-native/no-inline-styles
        { color, textDecorationLine: underline ? 'underline' : 'none' },
      ]}
    >
      {children}
    </Text>
  )
}
