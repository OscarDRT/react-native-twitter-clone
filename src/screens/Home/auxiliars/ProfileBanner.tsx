import { Box } from '@components/Box'
import { ProgressiveImage } from '@components/ProgressiveImage'
import { scale } from '@root/utils/commons'
import React from 'react'

interface ProfileBannerProps {
  bannerUrl: string
}

export const ProfileBanner: React.FC<ProfileBannerProps> = ({ bannerUrl }) => {
  return (
    <Box
      height={scale(100)}
      backgroundColor={'secondaryBackground'}
      opacity={!!bannerUrl ? 1 : 0.5}
    >
      <ProgressiveImage source={bannerUrl} style={{ height: '100%' }} />
    </Box>
  )
}
