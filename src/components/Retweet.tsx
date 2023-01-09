import { EvilIcons } from '@expo/vector-icons'
import { useTheme } from '@root/theme/ThemeProvider'
import { scale } from '@root/utils/commons'
import React from 'react'
import { Box } from './Box'
import { Text } from './Text'

interface RetweetProps {
  size?: number
  show: boolean
}

export const Retweet: React.FC<RetweetProps> = ({ size = scale(55), show }) => {
  const theme = useTheme()

  if (!show) return null

  return (
    <Box flexDirection={'row'}>
      <Box width={size}>
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
    </Box>
  )
}
