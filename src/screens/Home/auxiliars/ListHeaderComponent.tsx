import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { useTheme } from '@root/theme/ThemeProvider'
import React from 'react'
import { Profile } from './Profile'
import { ProfileBanner } from './ProfileBanner'
import { PIC_SIZE, ProfilePic } from './ProfilePic'

interface ListHeaderComponentProps {
  user: User
}

export const ListHeaderComponent: React.FC<ListHeaderComponentProps> = ({
  user,
}) => {
  const theme = useTheme()

  return (
    <Box>
      <Box>
        <ProfileBanner bannerUrl={user.profile_banner_url as string} />
        <Box position={'absolute'} bottom={-PIC_SIZE / 2} left={20}>
          <ProfilePic profilePicUrl={user.profile_pic_url as string} />
        </Box>
      </Box>
      <Profile user={user} />
      <Box paddingHorizontal={'m'} height={50} justifyContent={'center'}>
        <Text variant={'title'}>Tweets</Text>
      </Box>
    </Box>
  )
}
