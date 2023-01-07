import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { getUser } from '@root/api/user'

export const Profile = () => {
  useEffect(() => {
    getUser()
      .then(console.log)
      .catch(e => console.log(JSON.stringify(e)))
  }, [])

  return (
    <Box
      flex={1}
      backgroundColor={'primary'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Text>Open up App.tsx to start working on your!</Text>
      <StatusBar style="auto" />
    </Box>
  )
}
