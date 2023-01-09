import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'

export const Search = () => {
  return (
    <MainContainer>
      <HeaderBack title="Search" />
      <Box
        flex={1}
        paddingHorizontal={'m'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text>Search Screen</Text>
      </Box>
    </MainContainer>
  )
}
