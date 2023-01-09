import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { TweetCardById } from '@components/Cards/tweet'
import { scale, StackNavigationProps } from '@root/utils/commons'
import { useTweet } from '@root/hooks/tweets'
import { Retweet } from '@components/Retweet'
import { ScrollView } from 'react-native'
import { useTheme } from '@root/theme/ThemeProvider'
import { ImageTweet } from '@components/ImageTweet'
import { Box } from '@components/Box'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export const Tweet: React.FC<StackNavigationProps<'Tweet'>> = ({ route }) => {
  const { tweetId } = route.params

  const tweet = useTweet(tweetId)

  const theme = useTheme()

  return (
    <MainContainer>
      <HeaderBack title={'Tweet'} />
      <ScrollView style={{ padding: theme.spacing.m }}>
        <Retweet show={tweet.retweet} size={scale(20)} />
        <Box flexDirection={'row'} paddingVertical={'s'}>
          <ImageTweet source={tweet.user.profile_pic_url} />
          <Box
            flex={1}
            marginLeft={'s'}
            flexDirection={'row'}
            justifyContent={'space-between'}
          >
            <Box flexDirection={'row'}>
              <Box marginRight={'xs'}>
                <Text numberOfLines={1} variant={'title'}>
                  {tweet.user.name}
                </Text>
                <Text numberOfLines={1} variant={'subtitle'}>
                  {`@${tweet.user.username}`}
                </Text>
              </Box>
              {tweet.user.is_verified && (
                <MaterialIcons
                  name="verified"
                  size={24}
                  color={theme.colors.primary}
                />
              )}
            </Box>
            <Box>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color="black"
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Text variant={'bigBody'}>{tweet.text}</Text>
        </Box>
      </ScrollView>
    </MainContainer>
  )
}
