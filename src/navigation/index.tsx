import { createStackNavigator } from '@react-navigation/stack'
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Profile } from '@screens/profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export const navigationRef = createNavigationContainerRef()

const RootStack = createNativeStackNavigator<RootStackParamList>()
const AppTabs = createBottomTabNavigator<AppTabParamList>()

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName={'TabNavigator'}
        screenOptions={{ header: () => null }}
      >
        <RootStack.Screen name={'TabNavigator'} component={TabContainer} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const TabContainer = () => {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen name={'Profile'} component={Profile} />
    </AppTabs.Navigator>
  )
}
