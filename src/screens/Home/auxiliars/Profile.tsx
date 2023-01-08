import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { scale } from '@root/utils/commons'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@root/theme/ThemeProvider'
import moment from 'moment'

moment.locale('es')

export const Profile = ({ user }: { user: User }) => {
  const theme = useTheme()

  const date = moment(user.creation_date, 'ddd MMM DD HH:mm:ss Z YYYY').format(
    '[Se unió en] MMMM [de] YYYY'
  )

  return (
    <Box padding={'m'}>
      <Box
        alignSelf={'flex-end'}
        borderColor={'tertiary'}
        borderWidth={0.3}
        borderRadius={scale(18)}
        paddingHorizontal={'m'}
        paddingVertical={'s'}
      >
        <Text variant={'body'} fontWeight={'700'}>
          Editar perfil
        </Text>
      </Box>

      <Box marginTop={'s'}>
        <Text variant={'bigTitle'}>{user.name}</Text>

        <Text
          variant={'body'}
          color={'secondaryText'}
        >{`@${user.username}`}</Text>

        <Box marginVertical={'l'}>
          <Text variant={'body'}>{user.description}</Text>
        </Box>

        <Box marginBottom={'l'}>
          <Box flexDirection={'row'} flexWrap={'wrap'}>
            {user.location && (
              <Box
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                marginRight={'m'}
              >
                <Ionicons
                  name="ios-location-outline"
                  size={15}
                  color="black"
                  style={{ marginRight: theme.spacing.xs }}
                />
                <Text variant={'subtitle'} color={'secondaryText'}>
                  {user.location}
                </Text>
              </Box>
            )}

            {user.external_url && (
              <Box
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Ionicons
                  name="link-outline"
                  size={15}
                  color="black"
                  style={{ marginRight: theme.spacing.xs }}
                />
                <Text variant={'subtitle'} color={'secondaryText'}>
                  {user.external_url}
                </Text>
              </Box>
            )}
          </Box>

          {user.creation_date && (
            <Box flexDirection={'row'} alignItems={'center'} marginRight={'m'}>
              <Ionicons
                name={'ios-calendar-outline'}
                size={15}
                color="black"
                style={{ marginRight: theme.spacing.xs }}
              />
              <Text variant={'subtitle'} color={'secondaryText'}>
                {date}
              </Text>
            </Box>
          )}
        </Box>

        <Box flexDirection={'row'} marginBottom={'s'}>
          <Text variant={'body'} fontWeight={'bold'} marginRight={'l'}>
            {user.following_count} <Text variant={'body'}>Siguiendo</Text>
          </Text>
          <Text variant={'body'} fontWeight={'bold'}>
            {user.follower_count} <Text variant={'body'}>Siguiedores</Text>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
