import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const assests = () => {
  return (
    <View style={styles.container}>
      <View>
    <Image source={'../assets/line.png'} style={styles.line} />
    
    <Text style={styles.buttonText}>Line Graph</Text>
    </View>
    <View>
    <Image source={'../assets/bar.png'} style={styles.bar} />
  
    <Text style={styles.buttonText}>Bar Graph</Text>
    </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,   
    alignItems: 'center',
    backgroundColor: '#B4744D',
   
  },
  bar:{
    
    width:500,
    height: 200,
    marginTop: 50,
    
  },
  line:{
    width:500,
    height: 200,
    marginTop: 50,
  },
  buttonText:{
    fontSize: 32,
    textAlign: 'center',
  }
})


export default assests