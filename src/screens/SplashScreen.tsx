import { Image, ImageBackground, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  const {width,height} = useWindowDimensions();
  return (
      <ImageBackground  source={require('../assets/bg_splash.png')} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('../assets/logo.png')} style={{width:width*0.7,resizeMode:'contain',marginTop:height}}/>
      </ImageBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})