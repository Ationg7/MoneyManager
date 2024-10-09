import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
const bills = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Statistics Section */}
      <View style={styles.statisticsContainer}>
        <Text style={styles.statisticsTitle}>Statistics</Text>
        <View style={styles.spendingProgress}>
          <Text style={styles.totalSpending}>5000.0</Text>  
        </View>
        <View style={styles.tabs}>
          <Text style={styles.tabActive}>Weekly</Text>
          <Text style={styles.tab}>Monthly</Text>
          <Text style={styles.tab}>Yearly</Text>
        </View>
      </View>

      {/* Expense and Income */}
      <View style={styles.reportContainer}>
        <View style={styles.reportItem}>
          <Text style={styles.expenseLabel}>Total Expenses</Text>
          <Text style={styles.expenseAmount}>1500.0</Text>
        </View>
        <View style={styles.reportItem}>
          <Text style={styles.incomeLabel}>Total Savings</Text>
          <Text style={styles.incomeAmount}>2000.0</Text>
        </View>
      </View>

      {/* Spending Report */}
      <Text style={styles.sectionTitle}>Savings Progress</Text>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Today</Text>
          <Text style={styles.percentage}>1000</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Yesterday</Text>
          <Text style={styles.percentage}>1000</Text>
        </View>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 10,
    width: 50,
    borderRadius: 5,
    marginTop: 70,
  },
  progressBar: {
    height: 30,
    width:'auto',
    borderRadius: 5,

  },
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE',
    padding: 20,
  },
  statisticsContainer: {
    backgroundColor:'#e4a05e',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    height:300,
    width:350,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  section: {
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statisticsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  spendingProgress: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalSpending: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop:80,
    height: 50,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 70,
   
  },
  tab: {
    fontSize: 16,
    color: '#888',
  },
  tabActive: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  reportContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  reportItem: {
    alignItems: 'center',
  },
  expenseLabel: {
    color: '#FF6B6B',
    fontSize: 16,
  },
  expenseAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  incomeLabel: {
    color: '#4CAF50',
    fontSize: 16,
  },
  incomeAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  spendingReportTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    
  },
  spendingReportItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  spendingItemLabel: {
    fontSize: 16,
  },
  spendingItemAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  spendingItemDate: {
    fontSize: 14,
    color: '#888',
  },
});

export default bills;
