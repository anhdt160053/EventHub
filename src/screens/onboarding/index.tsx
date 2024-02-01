import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const DATA = [
  {
    imageUri : require('../../assets/onboarding_1.png')
  },
  {
    imageUri : require('../../assets/onboarding_2.png')
  },
  {
    imageUri : require('../../assets/onboarding_3.png')
  },
]

const Onboarding = () => {
  const {width,height} = useWindowDimensions()

  const renderPhoto = ({item}: any) => {
    console.log('item===',item?.imageUri)
    return  <View style = {{ flex:1, flexDirection:'row',marginBottom:100}}>
              <Image source={item?.imageUri} style={{width:width,resizeMode:'cover'}}/>
          </View>
  }


  return (
      <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={DATA}
        renderItem={item => renderPhoto(item)}
        keyExtractor={item => item.imageUri}
        style={{width: width, height:height}}
      />
  )
}

export default Onboarding

const styles = StyleSheet.create({})