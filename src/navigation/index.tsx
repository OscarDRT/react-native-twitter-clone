import { createStackNavigator } from '@react-navigation/stack'
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Profile } from '@screens/profile'

export const navigationRef = createNavigationContainerRef()

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName={'Profile'}>
        <RootStack.Screen
          name={'Profile'}
          component={Profile}
          options={{ header: () => null }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
