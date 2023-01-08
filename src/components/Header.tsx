import React from 'react'
import { Text } from './Text'
import { Box, BoxProps } from './Box'
import { scale } from '@root/utils/commons'
import { Ionicons } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import { useTheme } from '@root/theme/ThemeProvider'

interface IHeaderProps extends BoxProps {
  children: React.ReactNode
}

export const Header: React.FC<IHeaderProps> = ({ children, ...props }) => {
  return (
    <Box backgroundColor={'primaryBackground'}>
      <Box
        minHeight={scale(50)}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        paddingHorizontal={'m'}
        backgroundColor={'primaryBackground'}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0.5,
          },
          shadowOpacity: 0.18,
          shadowRadius: 0.5,

          elevation: 0.5,
        }}
        {...props}
      >
        {children}
      </Box>
    </Box>
  )
}

export const HeaderRight: React.FC<IChildren> = ({ children }) => {
  return (
    <Box
      flex={1}
      flexDirection={'row'}
      justifyContent={'flex-end'}
      alignItems={'center'}
      height={'100%'}
    >
      {children}
    </Box>
  )
}

export const HeaderLeft: React.FC<IChildren> = ({ children }) => {
  return (
    <Box
      flex={1}
      flexDirection={'row'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      height={'100%'}
    >
      {children}
    </Box>
  )
}

interface IHeaderBack extends BoxProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  showBackButton?: boolean
}

export const HeaderBack: React.FC<IHeaderBack> = ({
  title,
  subtitle,
  children,
  showBackButton = true,
  ...props
}) => {
  const theme = useTheme()

  return (
    <Header {...props}>
      <HeaderLeft>
        {showBackButton && (
          <Pressable style={{ marginRight: theme.spacing.l }}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
        )}
        <Box>
          <Text variant={'title'}>{title}</Text>
          <Text variant={'subtitle'}>{subtitle}</Text>
        </Box>
      </HeaderLeft>
      {children}
    </Header>
  )
}
