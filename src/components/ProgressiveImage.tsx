import { opacity } from '@shopify/restyle'
import React, { useCallback, useMemo } from 'react'
import {
  Animated,
  ImageResizeMode,
  Image,
  ImageSourcePropType,
  StyleSheet,
  StyleProp,
  ImageStyle,
} from 'react-native'
import { Box } from './Box'

const AnimatedFastImage = Animated.createAnimatedComponent(Image)

interface ProgressiveImageProps {
  source: string
  resizeMode?: ImageResizeMode
  style?: StyleProp<ImageStyle>
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  source,
  resizeMode = 'cover',
  style,
}) => {
  const { sourceUriAnimated, sourceUri } = useMemo(
    () => ({
      sourceUriAnimated: new Animated.Value(0),
      sourceUri: source,
    }),
    []
  )

  const onImageLoad = useCallback(() => {
    Animated.timing(sourceUriAnimated, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start()
  }, [sourceUriAnimated])

  return (
    <Box flex={1} alignItems={'center'} justifyContent={'center'}>
      <Animated.Image
        resizeMode={resizeMode}
        source={{ uri: sourceUri }}
        style={[StyleSheet.absoluteFill, style, { opacity: sourceUriAnimated }]}
        onLoad={() => onImageLoad()}
      />
    </Box>
  )
}
