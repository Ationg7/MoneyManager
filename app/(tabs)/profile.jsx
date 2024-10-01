import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Profile = () => {
  const user = {
    name: 'kyutieperli',
    email: 'ationgferlita@gmail.com',
    profilePicture: 'https://i.pinimg.com/564x/65/a1/0b/65a10b505e3001c955109b7f1906a314.jpg', // Placeholder image URL
  };

  const handleLogout = () => {
    // Handle logout functionality here
    console.log('Logged out');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B4744D',
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
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Profile;
