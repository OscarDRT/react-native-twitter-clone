import React, { useEffect } from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { FlashList } from '@shopify/flash-list'
import { getUser } from '@root/api/user'

export const InitialLoad = () => {
  return (
    <MainContainer margins>
      <Text>InitialLoad Screen</Text>
    </MainContainer>
  )
}
