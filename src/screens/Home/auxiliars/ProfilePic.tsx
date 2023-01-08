import { Box } from '@components/Box'
import { ProgressiveImage } from '@components/ProgressiveImage'
import { scale } from '@root/utils/commons'
import React from 'react'

interface ProfilePicProps {
  profilePicUrl: string
}

export const PIC_SIZE = scale(75)

export const ProfilePic: React.FC<ProfilePicProps> = ({ profilePicUrl }) => {
  return (
    <Box
      height={PIC_SIZE}
      width={PIC_SIZE}
      borderRadius={PIC_SIZE}
      overflow={'hidden'}
      borderColor={'primaryBackground'}
      borderWidth={1}
    >
      <ProgressiveImage source={profilePicUrl} />
    </Box>
  )
}
