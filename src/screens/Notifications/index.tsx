import React from 'react'
import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { MainContainer } from '@components/Containers/Main'

export const Notifications = () => {
  return (
    <MainContainer>
      <HeaderBack title="Notifications" />
      <Box
        flex={1}
        paddingHorizontal={'m'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text>Notifications Screen</Text>
      </Box>
    </MainContainer>
  )
}
