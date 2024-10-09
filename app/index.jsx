import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/jar-removebg-preview.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Money Manager</Text>
        <Link href="/home" style={styles.link}>
          Let's get started
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4a05e',
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 20,
  },
  link: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',  // Optional: to make the link look more like a clickable link
  },
});

export default Index;
