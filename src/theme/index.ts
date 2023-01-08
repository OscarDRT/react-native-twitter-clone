import { scale } from '@root/utils/commons'
import { createTheme } from '@shopify/restyle'

const palette = {
  primary: '#00ACEE',
  secondary: '#FFFFFF',
  tertiary: '#536471',
  alternate: 'red',
  primaryBackground: '#FFFFFF',
  secondaryBackground: '#000000',
  primaryText: '#101213',
  secondaryText: '#57636C',
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
    primaryText: palette.primaryText,
    secondaryText: palette.secondaryText,
    transparent: palette.transparent,
  },
  spacing: {
    none: 0,
    xs: scale(4),
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
    bigTitle: {
      fontSize: scale(20),
      fontWeight: '800',
      lineHeight: scale(24),
      color: 'primaryText',
    },
    title: {
      fontSize: scale(17),
      fontWeight: '700',
      lineHeight: scale(20),
      color: 'primaryText',
    },
    subtitle: {
      fontSize: scale(13),
      fontWeight: '400',
      lineHeight: scale(16),
      color: 'secondaryText',
    },
    body: {
      fontSize: scale(15),
      fontWeight: '400',
      lineHeight: scale(20),
      color: 'primaryText',
    },
    defaults: {},
  },
})

export type Theme = typeof theme
export default theme
