import { scale } from '@root/utils/commons'
import { createTheme } from '@shopify/restyle'

const palette = {
  primary: '#00ACEE',
  secondary: '#FFFFFF',
  tertiary: '#FFFFFF',
  alternate: 'red',
  primaryBackground: '#FFFFFF',
  secondaryBackground: '#000000',
  transparent: 'transparent',
}

const theme = createTheme({
  colors: {
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    alternate: palette.alternate,
    primaryBackground: palette.primaryBackground,
    secondaryBackground: palette.secondaryBackground,
    transparent: palette.transparent,
  },
  spacing: {
    none: 0,
    s: scale(8),
    m: scale(16),
    l: scale(24),
    xl: scale(40),
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {},
  },
})

export type Theme = typeof theme
export default theme
