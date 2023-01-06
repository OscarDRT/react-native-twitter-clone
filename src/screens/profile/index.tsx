import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Box } from '@components/Box'
import { Text } from '@components/Text'

export const Profile = () => {
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
