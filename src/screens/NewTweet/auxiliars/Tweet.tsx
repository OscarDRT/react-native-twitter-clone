import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { scale } from '@root/utils/commons'
import React from 'react'
import { Pressable } from 'react-native'

interface TweetProps {
  onPress: () => void
  disabled: boolean
}

export const Tweet: React.FC<TweetProps> = ({ onPress, disabled }) => {
  return (
    <Pressable
      style={{ opacity: disabled ? 0.5 : 1 }}
      onPress={onPress}
      disabled={disabled}
    >
      <Box
        backgroundColor={'primary'}
        paddingVertical={'xs'}
        paddingHorizontal={'m'}
        borderRadius={scale(18)}
      >
        <Text variant={'body'} color={'tertiaryText'} fontWeight={'700'}>
          Twittear
        </Text>
      </Box>
    </Pressable>
  )
}
