import { Navigation } from '@root/navigation'
import { ThemeProvider } from '@root/theme/ThemeProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
