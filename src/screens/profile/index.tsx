import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { getUser } from '@root/api/user'
import { MainContainer } from '@components/Containers/Main'

export const Profile = () => {
  useEffect(() => {
    getUser()
      .then(console.log)
      .catch(e => console.log(JSON.stringify(e)))
  }, [])

  return (
    <MainContainer margins>
      <Text>Open up App.tsx to start working on your!</Text>
    </MainContainer>
  )
}
