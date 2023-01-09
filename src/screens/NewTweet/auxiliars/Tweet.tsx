import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { scale } from '@root/utils/commons'
import React from 'react'
import { Pressable } from 'react-native'

export const Tweet = () => {
  return (
    <Pressable style={{ opacity: 1 }}>
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
