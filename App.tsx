import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import SplashScreen from './src/screens/SplashScreen'
import Onboarding from './src/screens/onboarding'

const App = () => {
  return (
    <View>
      <StatusBar hidden />
      <SplashScreen />
      {/* <Onboarding /> */}
    </View>
  )
}

export default App