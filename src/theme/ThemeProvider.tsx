import * as React from 'react'
import {
  ThemeProvider as ThemeProviderRS,
  useTheme as useReTheme,
} from '@shopify/restyle'

import theme, { Theme } from './'

interface ThemeProviderProps {
  children?: React.ReactElement
}

export const useTheme = () => useReTheme<Theme>()

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProviderRS theme={theme}>{children}</ThemeProviderRS>
}
