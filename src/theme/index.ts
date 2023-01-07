import { createTheme } from '@shopify/restyle'

const palette = {
  primary: '#FFFFFF',
  secondary: '#FFFFFF',
  tertiary: '#FFFFFF',
  alternate: '#FFFFFF',
  primaryBackground: '#FFFFFF',
  secondaryBackground: '#FFFFFF',
}

const theme = createTheme({
  colors: {
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    alternate: palette.alternate,
    primaryBackground: palette.primaryBackground,
    secondaryBackground: palette.secondaryBackground,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
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
