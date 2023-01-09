import { Box } from '@components/Box'
import { MainContainer } from '@components/Containers/Main'
import { HeaderBack } from '@components/Header'
import { ImageTweet } from '@components/ImageTweet'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTweetsActions } from '@root/hooks/tweets'
import { useUserState } from '@root/hooks/user'
import { generateUniqueId, scale } from '@root/utils/commons'
import moment from 'moment'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Tweet } from './auxiliars/Tweet'

export const NewTweet = () => {
  const { state } = useUserState()

  const { setTweet } = useTweetsActions()

  const [text, onChangeText] = useState<string>('')

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'root'>>()

  const newTweet: Tweet = {
    tweet_id: generateUniqueId(),
    creation_date: moment().format('ddd MMM DD HH:mm:ss ZZ YYYY'),
    text,
    media_url: null,
    video_url: null,
    user: { ...(state.user as User) },
    language: 'es',
    favorite_count: 32,
    retweet_count: 5,
    reply_count: 9,
    quote_count: 0,
    retweet: false,
    views: null,
    timestamp: 1649472509,
    video_view_count: null,
  }

  return (
    <MainContainer>
      <HeaderBack>
        <Tweet
          onPress={() => {
            setTweet({ tweet: newTweet })
            navigation.canGoBack() && navigation.goBack()
          }}
          disabled={!text.length}
        />
      </HeaderBack>
      <Box paddingHorizontal={'m'}>
        <ImageTweet source={state.user?.profile_pic_url as string} />
        <Box paddingLeft={'xl'} paddingTop={'s'}>
          <TextInput
            maxLength={140}
            placeholder="¿Qué está pasando?"
            multiline={true}
            value={text}
            onChangeText={onChangeText}
            style={{ fontSize: scale(20) }}
          />
        </Box>
      </Box>
    </MainContainer>
  )
}
