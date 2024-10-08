import { StyleSheet, Text, View,TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

const bills = () => {
  const reportsData = [
    { id: 1, category: 'Food', amount: 750 },
    { id: 2, category: 'Transportation Fee', amount: 450 },
    { id: 3, category: 'Clothes', amount: 1200 },
    { id: 4, category: 'Load', amount: 102 },
  ];

  const checkAlerts = (item) => {
    const spendingPercentage = (item.amount / item.budget) * 100;
    if (spendingPercentage > 80) { // Example threshold for alert
      Alert.alert('Alert', `You have spent over {spendingPercentage.toFixed(2)}% of your {item.category} budget.`);
    }
  };

  const setReminder = (item) => {
    Alert.alert('Reminder Set', `Reminder set for {item.category}: Spend less than {item.budget - item.amount}.`);
  };

  return (
    <View style={styles.container}>

      <View style={styles.summary}>
        <View>
          <Text style={styles.summaryTitle}>Oct·Expenses</Text>
          <Text style={styles.expense}>0</Text>
        </View>
        <View>
          <Text style={styles.summaryTitle}>Oct·Income</Text>
          <Text style={styles.income}>0</Text>
        </View>
      </View>
   
      <Text style={styles.title}>Spending Reports</Text>
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
  
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: '#B4744D',
  },
  button: {
    width: 120,
    marginRight:580,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  button1: {
    marginLeft:500,
    position: 'absolute',
    top: 10, // Adjust to fit your design needs
    right: 10, // Adjust to fit your design needs
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
  },
  
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 20,
    color: 'black',
  },
  summaryTitle: {
    fontSize: 16,
    color: 'black',
    marginLeft: 20,
  },
  expense: {
    fontSize: 32,
    color: '#ff5e57',
    marginLeft: 20,
  },
  income: {
    fontSize: 32,
    color: '#5ec87d',
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'left',
  },
  report: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff5e57',
  },
  reminderButton: {
    backgroundColor: '#28A745',
    padding: 5,
    borderRadius: 5,
  },
});
export default bills