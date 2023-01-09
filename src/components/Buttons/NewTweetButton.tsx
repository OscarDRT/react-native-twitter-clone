import { Box } from '@components/Box'
import { scale } from '@root/utils/commons'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useTheme } from '@root/theme/ThemeProvider'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useCallback } from 'react'

const BUTTON_SIZE = scale(56)

export const NewTweetButton = () => {
  const theme = useTheme()

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'root'>>()

  const onNavigate = () => navigation.navigate('NewTweet')

  return (
    <Pressable onPress={onNavigate}>
      <Box
        height={BUTTON_SIZE}
        width={BUTTON_SIZE}
        borderRadius={BUTTON_SIZE}
        backgroundColor={'primary'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Feather
          name="feather"
          size={scale(25)}
          color={theme.colors.primaryBackground}
        />
      </Box>
    </Pressable>
  )
}
