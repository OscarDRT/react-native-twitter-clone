import { createTheme } from '@shopify/restyle'

const palette = {
  primary: '#188CD8',
}

const theme = createTheme({
  colors: {
    primary: palette.primary,
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
