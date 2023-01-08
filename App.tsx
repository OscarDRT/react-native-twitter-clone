import { Navigation } from '@root/navigation'
import { persistor, store } from '@root/store'
import { ThemeProvider } from '@root/theme/ThemeProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
