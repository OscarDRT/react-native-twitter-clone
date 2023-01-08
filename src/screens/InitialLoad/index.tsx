import React, { useEffect } from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { FlashList } from '@shopify/flash-list'
import { getUser } from '@root/api/user'
import Lottie from 'lottie-react-native'
import { Box } from '@components/Box'

export const InitialLoad = () => {
  return (
    <MainContainer backgroundColor={'primaryBackground'}>
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <Lottie
          source={require('../../assets/lottie/splash.json')}
          style={{ flex: 1 }}
          autoPlay
          loop
        />
      </Box>
    </MainContainer>
  )
}
