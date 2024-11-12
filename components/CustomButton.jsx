import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.buttonContainer,
        containerStyles,
        isLoading && styles.loadingContainer, // Applies lower opacity when loading
      ]}
      disabled={isLoading} // Disables button when loading
    >
      {isLoading ? (
        <ActivityIndicator color="#FFFFFF" size="small" />
      ) : (
        <Text style={[styles.buttonText, textStyles]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#DB88A1', // Secondary color
    borderRadius: 12, // Rounded corners
    minHeight: 62,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16, // Optional padding
  },
  loadingContainer: {
    opacity: 0.5, // Lower opacity when loading
  },
  buttonText: {
    color: '#FFFFFF', // Primary text color
    fontSize: 18,
    fontWeight: '600', // Semi-bold equivalent
    fontFamily: 'monospace',
  },
});

export default CustomButton;
