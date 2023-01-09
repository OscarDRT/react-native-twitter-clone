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

interface TweetCardProps {
  tweet: Tweet
}

export const SIZE = scale(55)

export const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  const theme = useTheme()

  return (
    <Box padding={'m'} borderColor={'tertiary'} borderWidth={0.2}>
      <Box flexDirection={'row'}>
        {tweet.retweet && (
          <>
            <Box width={SIZE}>
              <EvilIcons
                name={'retweet'}
                size={24}
                color={'black'}
                style={{
                  alignSelf: 'flex-end',

                  marginBottom: theme.spacing.xs,
                }}
              />
            </Box>
            <Text variant={'subtitle'} fontWeight={'700'} marginLeft={'s'}>
              Retwitteaste
            </Text>
          </>
        )}
      </Box>

      <Box flexDirection={'row'}>
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius={SIZE}
          overflow={'hidden'}
          backgroundColor={'secondaryBackground'}
        >
          <ProgressiveImage
            source={tweet.user.profile_pic_url}
            style={{ height: '100%', width: '100%' }}
            resizeMode={'stretch'}
          />
        </Box>

        <Box flex={1}>
          <Box
            flex={1}
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
                //style={{ marginLeft: theme.spacing.m }}
              />
            </Box>
          </Box>
          <Box marginLeft={'s'}>
            <Text variant={'body'}>{tweet.text}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export const TweetCardById: React.FC<{ id: string }> = ({ id }) => {
  const tweet = useTweet(id)

  return <TweetCard tweet={tweet} />
}
