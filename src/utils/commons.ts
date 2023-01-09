import { Dimensions } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '@root/store'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import moment from 'moment'

const { width, height } = Dimensions.get('window')

export const username = 'Oscar__RT'

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680
const screenSize = Math.sqrt(width * height) / 100

const scale = (size: number) => (width / guidelineBaseWidth) * size
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor

let counter = 0

function generateUniqueId() {
  counter += 1
  return Date.now().toString(36) + counter.toString(36)
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {
  scale,
  verticalScale,
  moderateScale,
  screenSize,
  generateUniqueId,
  useAppDispatch,
  useAppSelector,
}

export interface StackNavigationProps<
  RouteName extends keyof RootStackParamList
> {
  navigation: StackNavigationProp<RootStackParamList, RouteName>
  route: RouteProp<RootStackParamList, RouteName>
}
