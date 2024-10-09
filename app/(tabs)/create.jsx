import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const create = () => {
  const [input, setInput] = useState(''); // Holds the input
  const [result, setResult] = useState(null); // Holds the result

  // Handles number and operator button presses
  const handlePress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handle OK button to calculate the result
  const handleOKPress = () => {
    try {
      const calculation = eval(input); // Evaluate the input expression
      setResult(calculation);
    } catch (error) {
      setResult('Error');
    }
  };

  // Handle backspace button
  const handleBackspacePress = () => {
    setInput((prevInput) => prevInput.slice(0, -1)); // Remove last character
  };

  return (
    <View style={styles.container}>
      {/* Header with Tabs */}
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Expenses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Cat Image */}
      <View style={styles.imageContainer}>
        <Image
          source={'assets/jar-removebg-preview.png'} // Replace with actual image link
          style={styles.catImage}
        />
      </View>

      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        {result !== null && <Text style={styles.resultText}>={result}</Text>}
      </View>

      {/* Calculator */}
      <View style={styles.calcContainer}>
        <View style={styles.calcRow}>
          <CalcButton label="1" onPress={() => handlePress('1')} />
          <CalcButton label="2" onPress={() => handlePress('2')} />
          <CalcButton label="3" onPress={() => handlePress('3')} />
        </View>
        <View style={styles.calcRow}>
          <CalcButton label="4" onPress={() => handlePress('4')} />
          <CalcButton label="5" onPress={() => handlePress('5')} />
          <CalcButton label="6" onPress={() => handlePress('6')} />
        </View>
        <View style={styles.calcRow}>
          <CalcButton label="7" onPress={() => handlePress('7')} />
          <CalcButton label="8" onPress={() => handlePress('8')} />
          <CalcButton label="9" onPress={() => handlePress('9')} />
        </View>
        <View style={styles.calcRow}>
          <CalcButton label="0" onPress={() => handlePress('0')} />
          <CalcButton label="+" onPress={() => handlePress('+')} />
          <CalcButton label="-" onPress={() => handlePress('-')} />
        </View>
        <View style={styles.sideButtons}>
          <CalcButton label="OK" isSideButton onPress={handleOKPress} />
          <CalcButton label="<-" isSideButton onPress={handleBackspacePress} />
        </View>
      </View>
    </View>
  );
};

// Button component for calculator
const CalcButton = ({ label, isSideButton = false, onPress }) => (
  <TouchableOpacity style={[styles.calcButton, isSideButton && styles.sideButton]} onPress={onPress}>
    <Text style={styles.calcButtonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4a05e', // Background color similar to the image
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    alignContent:'center',
   
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    backgroundColor: '#B0C4DE',
    padding: 10,
    borderRadius: 10,
    width: 150,
    height: 40,
    flexDirection:'row',
    marginRight:10,
    
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign:'center',
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  catImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignItems: 'center',
    marginTop: 5,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    backgroundColor: '#B0C4DE',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 5,
  },
  display: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 24,
    color: 'green',
  },
  calcContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: '#B0C4DE',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  calcRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  calcButton: {
    backgroundColor: '#fff',
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  calcButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sideButtons: {
    marginTop:10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 80, // Increased height for better spacing
    marginLeft: 10, // Add space between side buttons and other buttons
  },
  sideButton: {
    width: 300, // Width to make side buttons larger
    height: 35, // Height to fit the design
    borderRadius: 5, // Rounded corners
    backgroundColor: '#fff', // Background color of side buttons
  },
});

export default create;
