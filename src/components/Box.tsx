import React from 'react'
import { Theme } from '@root/theme'
import { createBox } from '@shopify/restyle'

export const Box = createBox<Theme>()

export type BoxProps = React.ComponentProps<typeof Box>
