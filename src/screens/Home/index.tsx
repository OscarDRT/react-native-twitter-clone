import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { FlashList } from '@shopify/flash-list'
import { HeaderBack } from '@components/Header'
import { useUserState } from '@root/hooks/user'
import { ListHeaderComponent } from './auxiliars/ListHeaderComponent'
import { useTheme } from '@root/theme/ThemeProvider'
import { useGetMoreTweets, useTweets } from '@root/hooks/tweets'
import { TweetCardById } from '@components/Cards/tweet'
import { ActivityIndicator } from 'react-native'
import { Box } from '@components/Box'
import { scale } from '@root/utils/commons'

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
]

export const Home = () => {
  const { state } = useUserState()

  const { user } = state

  const tweets = useTweets()

  const theme = useTheme()

  const { loading, onEndReached } = useGetMoreTweets()

  return (
    <MainContainer>
      <HeaderBack
        title={`${user?.name}`}
        subtitle={`${user?.number_of_tweets} Tweets`}
      />
      <FlashList
        data={tweets}
        keyExtractor={(item, index) => `${item}-${index}`}
        estimatedItemSize={500}
        renderItem={({ item }) => <TweetCardById id={item} />}
        ListHeaderComponent={() => <ListHeaderComponent user={user as User} />}
        ListFooterComponent={() => {
          if (loading) {
            return (
              <Box
                height={scale(50)}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <ActivityIndicator
                  size={'large'}
                  color={theme.colors.primary}
                />
              </Box>
            )
          }
          return null
        }}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
      />
    </MainContainer>
  )
}
