import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Link, Redirect, router } from "expo-router";
import CustomButton from '../../components/CustomButton';
const Profile = () => {
  const user = {
    name: 'kyutieperli',
    email: 'ationgferlita@gmail.com',
    profilePicture: 'https://i.pinimg.com/564x/65/a1/0b/65a10b505e3001c955109b7f1906a314.jpg', // Placeholder image URL
  };

  

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

    
      <CustomButton
              title="Logout"
              handlePress={() => router.push('/sign-in')} 
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6D6E3',
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#F8C7D9',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default Profile;
