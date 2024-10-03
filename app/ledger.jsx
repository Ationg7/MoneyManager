import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  { id: '1', title: 'GADGETS', image: '../assets/gadget.png' }, // replace with actual image
  { id: '2', title: 'TRAVEL', image: '../assets/travel.png' },
  { id: '3', title: 'EDUCATION', image: '../assets/education.png' },
  { id: '4', title: 'RENOVATIONS', image: '../assets/renovations.png' },
  { id: '5', title: 'PET', image: '../assets/pet.png' },
  { id: '6', title: 'SAVINGS', image: '../assets/savings.png' },
];

const ledger = () => {
    const handlePress = (title) => {
        // handle button press, like navigating or showing details
        console.log(`${title} button pressed`);
      };
    
      const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item.title)}>
          <Image source={item.image} style={styles.itemImage} />
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
      );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={30} color="black"
          onPress={() => navigation.navigate('home')}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ledger</Text>
      </View>

      {/* Grid of items */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A6BFFE',
  },

  /* Header Section */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#A6BFFE', // Light gray color
    
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
  },

  /* Grid of Items */
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemContainer: {
    width:150,
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },

  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ledger

