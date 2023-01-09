import { createStackNavigator } from '@react-navigation/stack'
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@screens/Home'
import { Search } from '@screens/Search'
import { Notifications } from '@screens/Notifications'
import { Inbox } from '@screens/Inbox'
import { useTheme } from '@root/theme/ThemeProvider'
import { InitialLoad } from '@screens/InitialLoad'
import { Tweet } from '@screens/Tweet'

export const navigationRef = createNavigationContainerRef()

const RootStack = createNativeStackNavigator<RootStackParamList>()
const AppTabs = createBottomTabNavigator<AppTabParamList>()

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName={'InitialLoad'}
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name={'InitialLoad'} component={InitialLoad} />
        <RootStack.Screen name={'Tweet'} component={Tweet} />
        <RootStack.Screen name={'TabNavigator'} component={TabContainer} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const TabContainer = () => {
  const theme = useTheme()

  return (
    <AppTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.secondaryBackground,
        tabBarInactiveTintColor: theme.colors.secondaryBackground,
      }}
    >
      <AppTabs.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'ios-home-sharp' : 'ios-home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <AppTabs.Screen
        name={'Search'}
        component={Search}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'ios-search-sharp' : 'ios-search-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <AppTabs.Screen
        name={'Notifications'}
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={
                focused
                  ? 'ios-notifications-sharp'
                  : 'ios-notifications-outline'
              }
              color={color}
              size={size}
            />
          ),
        }}
      />
      <AppTabs.Screen
        name={'Inbox'}
        component={Inbox}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'ios-mail-sharp' : 'ios-mail-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </AppTabs.Navigator>
  )
}
