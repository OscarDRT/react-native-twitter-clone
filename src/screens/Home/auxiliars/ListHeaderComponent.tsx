import { Box } from '@components/Box'
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
  return (
    <Box>
      <Box>
        <ProfileBanner bannerUrl={user.profile_banner_url as string} />
        <Box position={'absolute'} bottom={-PIC_SIZE / 2} left={20}>
          <ProfilePic profilePicUrl={user.profile_pic_url as string} />
        </Box>
      </Box>
      <Profile user={user} />
    </Box>
  )
}
