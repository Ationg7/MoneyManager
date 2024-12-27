










import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, FlatList } from 'react-native';

const home = () => {

  const reportsData = [
    { id: 2, category: 'Transportation Fee', amount: 450 },
    { id: 3, category: 'Clothes', amount: 1200 },
    { id: 4, category: 'Load', amount: 102 },
    { id: 5, category: 'Grocery', amount:  700},
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Profile Information */}
       
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
          
          {/* Expense and Income */}
         
          <View style={styles.moneyContainer}>
            <View style={styles.expenseContainer}>
              <Text style={styles.labelText}>Expense</Text>
              <Text style={styles.valueText}>2200</Text>
              </View>
              <View style={styles.expenseContainer}>
              <Text style={styles.labelText}>Savings</Text>
              <Text style={styles.valueText}>3000</Text>
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
      <Text style={styles.label}>Expenses</Text>
        <FlatList
          data={reportsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.report} onLayout={() => (item)}>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
              
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F6D6E3',
  },
  topSection: {
    backgroundColor: '#F6D6E3',
    width: '100%',
    height: '45%',
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  profileButton: {
    padding: 5,
    backgroundColor: '#F8C7D9',
    width:100,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginRight: 5,
    
  },
  profileText: {
    fontSize: 15,
    
  },
   expenseContainer: {
    marginRight: 150, // Space between Expense and Income
  },
  label:{
fontSize: 16,
  },
  
  moneyContainer:{
    flexDirection: 'row',
    marginLeft: 20,
  },
  
  labelText: {
    fontSize: 14,
   
    marginTop: 10,
    fontSize: 20,
    fontWeight:'bold',
  },
  valueText: {
    fontSize: 20,
    fontWeight: 'bold',
    
    marginTop: 5,
  },
  catContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  catIcon: {
    width: 200,
    height: 200,
    
  },
  bottomSection: {
    backgroundColor: '#F8C7D9',
    width: '100%',
    height: '55%',
    paddingVertical: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  
  },
  report: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF8E1',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    width: 340,
    height:50,
    alignItems:'center',
    marginTop: 10,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});
export default home;
