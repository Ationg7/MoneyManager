import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { icons } from "../constants";// Ensure icons are imported correctly

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.fieldContainer, otherStyles]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword} // Toggle secureTextEntry
          {...props}
        />

        {title === "Password" && ( // Only show the eye icon for the password field
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIconContainer}
          >
            <Image
              source={showPassword ? icons.eye : icons.hide_eye} // Toggle between eye and hide_eye icons
              style={styles.eyeIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    color: '#D3D3D3',
    fontWeight: '500',
    marginBottom: 8,
  },
  inputContainer: {
    width: 350,
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: '#F6D6E3', // black-100
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#333', // black-200
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: 'gray',
    fontSize: 16,
    fontWeight: '600',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
});

export default FormField;
