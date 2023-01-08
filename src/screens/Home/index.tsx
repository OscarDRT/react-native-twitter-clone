import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { FlashList } from '@shopify/flash-list'
import { HeaderBack } from '@components/Header'
import { useUserState } from '@root/hooks/user'
import { Text } from '@components/Text'
import { ListHeaderComponent } from './auxiliars/ListHeaderComponent'

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

  return (
    <MainContainer>
      <HeaderBack
        title={`${user?.name}`}
        subtitle={`${user?.number_of_tweets} Tweets`}
      />
      <FlashList
        ListHeaderComponent={() => (
          <ListHeaderComponent bannerUrl={user?.profile_banner_url} />
        )}
        data={DATA}
        renderItem={({ item }) => <Text variant={'title'}>{item.title}</Text>}
        estimatedItemSize={200}
      />
    </MainContainer>
  )
}
