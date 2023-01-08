import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { FlashList } from '@shopify/flash-list'
import { HeaderBack } from '@components/Header'
import { useUserState } from '@root/hooks/user'
import { Text } from '@components/Text'
import { ListHeaderComponent } from './auxiliars/ListHeaderComponent'
import { useTheme } from '@root/theme/ThemeProvider'

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

  const theme = useTheme()

  return (
    <MainContainer>
      <HeaderBack
        title={`${user?.name}`}
        subtitle={`${user?.number_of_tweets} Tweets`}
      />
      <FlashList
        ListHeaderComponent={() => <ListHeaderComponent user={user as User} />}
        data={DATA}
        renderItem={({ item }) => null}
        estimatedItemSize={200}
        contentContainerStyle={{ paddingHorizontal: theme.spacing.m }}
      />
    </MainContainer>
  )
}
