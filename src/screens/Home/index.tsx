import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { FlashList } from '@shopify/flash-list'
import { HeaderBack } from '@components/Header'
import { useUserState } from '@root/hooks/user'
import { ListHeaderComponent } from './auxiliars/ListHeaderComponent'
import { useTheme } from '@root/theme/ThemeProvider'
import { useTweets } from '@root/hooks/tweets'
import { TweetCardById } from '@components/Cards/tweet'

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

  return (
    <MainContainer>
      <HeaderBack
        title={`${user?.name}`}
        subtitle={`${user?.number_of_tweets} Tweets`}
      />
      <FlashList
        ListHeaderComponent={() => <ListHeaderComponent user={user as User} />}
        data={tweets}
        renderItem={({ item }) => <TweetCardById id={item} />}
        estimatedItemSize={500}
      />
    </MainContainer>
  )
}
