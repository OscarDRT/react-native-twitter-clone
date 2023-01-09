import React, { useCallback } from 'react'
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
import { scale, StackNavigationProps } from '@root/utils/commons'

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
]

export const Home: React.FC<StackNavigationProps<'TabNavigator'>> = ({
  navigation,
}) => {
  const { state } = useUserState()

  const { user } = state

  const tweets = useTweets()

  const theme = useTheme()

  const { loading, onEndReached } = useGetMoreTweets()

  const onNavigate = useCallback(
    ({ tweetId }: { tweetId: string }) => {
      navigation.navigate('Tweet', {
        tweetId,
      })
    },
    [navigation]
  )

  return (
    <MainContainer>
      <HeaderBack
        title={`${user?.name}`}
        subtitle={`${user?.number_of_tweets} Tweets`}
        showBackButton={false}
      />
      <FlashList
        data={tweets}
        keyExtractor={(item, index) => `${item}-${index}`}
        estimatedItemSize={300}
        renderItem={({ item }) => (
          <TweetCardById id={item} onPress={tweetId => onNavigate(tweetId)} />
        )}
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
