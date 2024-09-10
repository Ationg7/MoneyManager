import { View, Text, Image, } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const index = () => {
  return (
    
    <View className="flex-1  justify-center bg-gray-800">
  <Image
    source={require('../assets/jar-removebg-preview.png')}
    style={{ width: 250, height: 250 }}
  />
  <View/>
  <View className="flex-1 justify-center my-4 ">
    <Text className="text-white font-bold text-4xl">
      Money Manager
    </Text>
  </View>

  <View className="space-y-4">
    <Link className="text-white font-bold text-4xl text-center" href="/home">
        Let's get started
    </Link>
  </View>
</View>
  )
}

export default index