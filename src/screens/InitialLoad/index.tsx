import React, { useEffect } from 'react'
import { MainContainer } from '@components/Containers/Main'
import Lottie from 'lottie-react-native'
import { Box } from '@components/Box'
import { useUserActions, useUserState } from '@root/hooks/user'
import useDebounce from 'react-use/lib/useDebounce'
import { StackNavigationProps, username } from '@root/utils/commons'
import { useGetTweets, useTweetsState } from '@root/hooks/tweets'

export const InitialLoad: React.FC<StackNavigationProps<'InitialLoad'>> = ({
  navigation,
}) => {
  const { state } = useUserState()

  const actions = useUserActions()

  const tweetsState = useTweetsState()

  useGetTweets()

  useEffect(() => {
    actions.getUser({ username })
  }, [])

  useDebounce(
    () => {
      if (state.isSessionActive && tweetsState.isTweetsActive) {
        navigation.navigate('TabNavigator')
      }
    },
    500,
    [state.isSessionActive, tweetsState.isTweetsActive]
  )

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
