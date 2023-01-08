import { Box } from '@components/Box'
import React from 'react'
import { ProfileBanner } from './ProfileBanner'

interface ListHeaderComponentProps {
  bannerUrl?: string
}

export const ListHeaderComponent: React.FC<ListHeaderComponentProps> = ({
  bannerUrl,
}) => {
  return (
    <Box>
      <ProfileBanner bannerUrl={bannerUrl} />
    </Box>
  )
}
