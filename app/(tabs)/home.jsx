import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

const home = () => {
  <FlatList
        data={reportsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.report} onLayout={() => checkAlerts(item)}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
            <TouchableOpacity style={styles.reminderButton} onPress={() => setReminder(item)}>
              <Text style={styles.buttonText}>Set Reminder</Text>
            </TouchableOpacity>
          </View>
        )}
      />
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Profile Information */}
        <View style={styles.profileContainer}>
          {/* Profile A */}
          <View style={styles.profileItem}>
            <TouchableOpacity
  style={styles.profileButton}
  onPress={() => navigation.navigate('profile')} // Navigate to Profile screen
>
  <Image
    source={{ uri: 'https://i.pinimg.com/564x/65/a1/0b/65a10b505e3001c955109b7f1906a314.jpg' }} // Profile image URL
    style={styles.profileImage} // Use a defined style for the image
  />
  <Text style={styles.profileText}>Profile</Text>
</TouchableOpacity>
            <Text style={styles.labelText}>Expense</Text>
            <Text style={styles.valueText}>0</Text>
          </View>
          <View style={styles.profileItem}>
            <Text style={styles.labelText1}>Income</Text>
            <Text style={styles.valueText}>0</Text>
          </View>
      
        </View>

        {/* Middle Cat Icon */}
        <View style={styles.catContainer}>
          <Image
            source={'../assets/kyutiecat.png'} // Using the imported local image
            style={styles.catIcon}
          />
        </View>
      </View>

      {/* Bottom Section - Buttons */}
      <View style={styles.bottomSection}>
      <FlatList
        data={reportsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.report} onLayout={() => checkAlerts(item)}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
            <TouchableOpacity style={styles.reminderButton} onPress={() => setReminder(item)}>
              <Text style={styles.buttonText}>Set Reminder</Text>
            </TouchableOpacity>
          </View>
        )}
      />
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  /* Top Section */
  topSection: {
    backgroundColor: '#f2a365', // Light brown color
    width: '100%',
    height: '45%',
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
 
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  labelText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
  },

  labelText1: {
    fontSize: 14,
    color: '#fff',
    marginTop: 45,
  },

  valueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },

  catContainer: {
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  catIcon: {
    width: 180,
    height: 180,
    marginTop:1,
    
  },

  /* Bottom Section */
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#AAC9F6', // Light gray color
    width: '100%',
    height: '58%',
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  icon:{
    height: 30,
    width: 30,
  },
  iconLabel:{

  },
  profileButton: {
    padding: 5, // Reduce padding for a tighter touchable area
    backgroundColor: '#f2a365', // Keep the background color
    borderRadius: 10, // Rounded corners
    flexDirection: 'row', // Align image and text in a row
    alignItems: 'center', // Center the content vertically
  },
  
  profileImage: {
    height: 30, // Keep the height
    width: 30, // Keep the width
    borderRadius:20,
    marginRight: 5, // Add a small right margin to separate image and text
  },
});


export default home;
