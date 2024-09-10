import { View, Image} from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon=({icon,color,name,focused})=>{
  return ( 
    <View>
      <Image style={{width: 30}}
      source={icon}
      resizeMode="contain"
      classname="w-1 h-1"
      
      />
    </View>
  )
}
const Tabslayout = () => {
  return (
    <>
      <Tabs>
          <Tabs.Screen
              name="home"
              options={{
              title: "Home",
              headerShown:false,
      tabBarIcon: ({color,focused})=>(
          <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
           />
                )
              }}
      /> 
      
      <Tabs.Screen
              name="bills"
              options={{
              title: "Bills",
              headerShown:false,
      tabBarIcon: ({color,focused})=>(
          <TabIcon
              icon={icons.bills}
              color={color}
              name="Bills"
              focused={focused}
           />
                )
              }}
      /> 

<Tabs.Screen
              name="create"
              options={{
              title: "Create",
              headerShown:false,
      tabBarIcon: ({color,focused})=>(
          <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
           />
                )
              }}
      /> 

<Tabs.Screen
              name="assests"
              options={{
              title: "Assets",
              headerShown:false,
      tabBarIcon: ({color,focused})=>(
          <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Assets"
              focused={focused}
           />
                )
              }}
      /> 
        <Tabs.Screen
              name="profile"
              options={{
              title: "Profile",
              headerShown:false,
      tabBarIcon: ({color,focused})=>(
          <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
           />
                )
              }}
      /> 
      
              
      </Tabs>
    </>
  )
}

export default Tabslayout