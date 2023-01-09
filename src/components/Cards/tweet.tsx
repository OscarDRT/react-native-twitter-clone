import { Box } from '@components/Box'
import { ProgressiveImage } from '@components/ProgressiveImage'
import { useTweet } from '@root/hooks/tweets'
import { moderateScale, scale } from '@root/utils/commons'
import React from 'react'
import {
  EvilIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { useTheme } from '@root/theme/ThemeProvider'
import { Text } from '@components/Text'
import { Pressable } from 'react-native'
import { Retweet } from '@components/Retweet'
import { ImageTweet } from '@components/ImageTweet'

interface TweetCardProps {
  tweet: Tweet
  onPress?: (value: { tweetId: string }) => void
  disabled?: boolean
}

export const SIZE = scale(55)

export const TweetCard: React.FC<TweetCardProps> = ({
  tweet,
  onPress,
  disabled,
}) => {
  const theme = useTheme()

  return (
    <Pressable
      disabled={disabled}
      onPress={() =>
        onPress ? onPress({ tweetId: tweet.tweet_id }) : undefined
      }
    >
      <Box padding={'m'} borderColor={'tertiary'} borderWidth={0.2}>
        <Retweet show={tweet.retweet} />

        <Box flexDirection={'row'}>
          <ImageTweet source={tweet.user.profile_pic_url} />

          <Box flex={1}>
            <Box
              marginLeft={'s'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'flex-start'}
            >
              <Box flex={1} flexDirection={'row'}>
                <Box flex={0.5}>
                  <Text numberOfLines={1} variant={'title'}>
                    {tweet.user.name}
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
            <Box marginLeft={'s'}>
              <Text variant={'body'}>{tweet.text}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Pressable>
  )
}

interface TweetCardByIdProps {
  id: string
  onPress?: (value: { tweetId: string }) => void
  disabled?: boolean
}

export const TweetCardById: React.FC<TweetCardByIdProps> = ({
  id,
  onPress,
  disabled,
}) => {
  const tweet = useTweet(id)

  return <TweetCard tweet={tweet} onPress={onPress} disabled={disabled} />
}
