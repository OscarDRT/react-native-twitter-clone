import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { FlashList } from '@shopify/flash-list'
import { getUser } from '@root/api/user'

export const Home = () => {
  return (
    <MainContainer margins>
      <Text>Home Screen</Text>
    </MainContainer>
  )
}
