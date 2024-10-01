import { View, Text, Image, } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const index = () => {
  return (
    
    <View className="flex-1 items-center justify-center bg-gray-800">
  <Image
    source={require('../assets/jar-removebg-preview.png')}
    style={{ width: 250, height: 250, alignSelf: 'center'}}
  />
  <View/>
  <View style={{ alignSelf:'center'}}>
    <Text className="text-white font-bold text-4xl ">
      Money Manager
    </Text>
  
    <Link className="text-white font-bold text-4xl" href="/home">
        Let's get started
    </Link>
  </View>
</View>
  )
}

export default index