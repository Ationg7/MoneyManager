import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const assets = () => {
  return (
    <View style={styles.container}>
      {/* Header with Cash and Loan */}
      <View style={styles.header}>
        <View style={styles.card}>
          {/* <Image style={styles.icon} source={require('../assets/savings.png')} /> */}
          <Text style={styles.text}>Savings</Text>
          <Text style={styles.amount}>2000</Text>
        </View>
        <View style={styles.card}>
          {/* <Image style={styles.icon} source={require('./assets/loan-icon.png')} /> */}
          <Text style={styles.text}>Expenses</Text>
          <Text style={styles.amount}>1500</Text>
        </View>
      </View>

      {/* Assets Section */}
      <Text style={styles.sectionTitle}>Savings Progress</Text>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Cash</Text>
          <Text style={styles.percentage}>4.00%</Text>
        </View>
        <ProgressBar progress={0.5} color="#B0C4DE" style={styles.progressBar} />
      </View>

      {/* Liabilities Section */}
      <Text style={styles.sectionTitle}>Expenses</Text>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Food</Text>
          <Text style={styles.percentage}>20%</Text>
        </View>
        <ProgressBar progress={0.7} color="#B0C4DE" style={styles.progressBar} />
      </View>

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Transportation Fee</Text>
          <Text style={styles.percentage}>5%</Text>
        </View>
        <ProgressBar progress={0.7} color="#B0C4DE" style={styles.progressBar} />
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Clothes</Text>
          <Text style={styles.percentage}>80%</Text>
        </View>
        <ProgressBar progress={0.7} color="#B0C4DE" style={styles.progressBar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4a05e',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#B0C4DE',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 8,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  amount: {
    fontSize: 22,
    color: '#000',
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
  label: {
    fontSize: 18,
    color: '#333',
  },
  percentage: {
    fontSize: 18,
    color: '#FF9800',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
});

export default assets;