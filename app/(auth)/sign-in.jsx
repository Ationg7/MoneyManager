import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ImageBackground } from "react-native";
import { Link, useRouter, } from "expo-router";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context"; 
import { getCurrentUser, signIn } from "../../lib/appwrite";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); 

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
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
          <Text style={styles.title}>SIGN IN</Text>

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

          {/* Sign In Button */}
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={styles.signInButton}
            textStyles={styles.buttonText}
            isLoading={isSubmitting} 
          />

        
          <View style={styles.promptContainer}>
            <Text style={styles.promptText}>Don't have an account?</Text>
            <Link href="/sign-up" style={styles.signupLink}>
              Sign Up
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

export default SignIn;




