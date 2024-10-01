import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

const Create = () => {
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [budgets, setBudgets] = useState([]);

  const addBudget = () => {
    if (category && budget) {
      setBudgets([...budgets, { id: budgets.length + 1, category, budget: parseFloat(budget), current: 0 }]);
      setCategory('');
      setBudget('');
    }
  };

  const updateCurrentSpending = (id, amount) => {
    setBudgets(budgets.map(b => 
      b.id === id ? { ...b, current: Math.min(b.budget, b.current + amount) } : b
    ));
  };
  const removeBudget = (id) => {
    setBudgets(budgets.filter(b => b.id !== id));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Budgets</Text>

      <TextInput
        style={styles.input}
        placeholder="Category (e.g., Food)"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Budget Amount"
        value={budget}
        onChangeText={setBudget}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={addBudget}>
        <Text style={styles.buttonText}>Add Budget</Text>
      </TouchableOpacity>

      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.budgetItem}>
            <Text style={styles.budgetText}>{item.category}: ${item.budget}</Text>
            <Text style={styles.progressText}>Spent: ${item.current} / ${item.budget}</Text>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => updateCurrentSpending(item.id, 100)} // Example to add $100 to current spending
            >
              <Text style={styles.buttonText}>Add $100</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeBudget(item.id)} // Remove budget
            >
              <Text style={styles.buttonText}>Remove</Text>
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
    padding: 20,
    backgroundColor: '#B4744D',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  budgetItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  budgetText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  progressText: {
    fontSize: 14,
    color: '#888',
  },
  updateButton: {
    marginTop: 10,
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: '#dc3545', // Red for the remove button
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Create;
