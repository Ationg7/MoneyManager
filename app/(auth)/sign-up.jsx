import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ImageBackground } from "react-native";
import { Link, useRouter } from "expo-router"; 
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { SafeAreaView } from "react-native-safe-area-context"; 
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); 

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return; 
    }

    setIsSubmitting(true);

    try {
      // Step 1: Create the user
      const result = await createUser(form.email, form.password, form.username);
      console.log(result); //Check the result 

      // Step 2: Redirect to home page after successful sign-up and login
      router.replace('/home'); 

    } catch (error) {
      // Step 3: Catch any errors and display them
      Alert.alert('Error', error.message || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/564x/a2/a9/5b/a2a95b6793d4c11a5ee3356aa6c1589b.jpg' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.title}>SIGN UP</Text>

          {/* Username input */}
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={styles.fieldSpacing}
          />

          {/* Email input */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={styles.fieldSpacing}
            keyboardType="email-address"
          />

          {/* Password input */}
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={styles.fieldSpacing}
            
          />

          {/* Sign Up Button */}
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles={styles.signInButton}
            textStyles={styles.buttonText}
            isLoading={isSubmitting} 
          />

          
          <View style={styles.promptContainer}>
            <Text style={styles.promptText}>Already have an account?</Text>
            <Link href="/sign-in" style={styles.signupLink}>
              Sign In
            </Link>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    marginBottom: 30,
  },
  fieldSpacing: {
    marginBottom: 20, 
  },
  signInButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#DB88A1",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  promptContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  promptText: {
    fontSize: 18,
    color: "#D3D3D3",
    fontWeight: "400",
  },
  signupLink: {
    fontSize: 18,
    color: "black", 
    fontWeight: "bold",
    marginLeft: 5,
  },
  backgroundImage: {
    width: "100%",
    height: "100%", 
  },
});

export default SignUp;




