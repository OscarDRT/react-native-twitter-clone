import { Box } from '@components/Box'
import { MainContainer } from '@components/Containers/Main'
import { HeaderBack } from '@components/Header'
import { ImageTweet } from '@components/ImageTweet'
import { Text } from '@components/Text'
import { useUserState } from '@root/hooks/user'
import { scale } from '@root/utils/commons'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Tweet } from './auxiliars/Tweet'

export const NewTweet = () => {
  const { state } = useUserState()

  const [text, onChangeText] = useState<string>('')

  console.log(text.length)

  return (
    <MainContainer>
      <HeaderBack>
        <Tweet />
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
