import { scale } from '@root/utils/commons'
import { Box } from './Box'
import { ProgressiveImage } from './ProgressiveImage'

interface ImageTweetProps {
  size?: number
  source: string
}

export const ImageTweet: React.FC<ImageTweetProps> = ({
  size = scale(55),
  source,
}) => {
  return (
    <Box
      height={size}
      width={size}
      borderRadius={size}
      overflow={'hidden'}
      backgroundColor={'secondaryBackground'}
    >
      <ProgressiveImage
        source={source}
        style={{ height: '100%', width: '100%' }}
        resizeMode={'stretch'}
      />
    </Box>
  )
}
