import { View, Text, Image, ScrollView, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <ImageBackground
      source={require('../assets/icons/bgc.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor="#161622" style="light" />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Money Manager</Text>
            <Image
              source={require('../assets/icons/imagelogo.png')}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.subtitle}>Master Your Money, Empower Your Future.</Text>
              <Text style={styles.descriptionText}>
                Track your spending, set savings goals, and build a brighter financial future—all from one easy-to-use platform.
              </Text>
            </View>
            <CustomButton
              title="LET'S GET STARTED!"
              handlePress={() => router.push('/sign-in')} 
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    paddingBottom: 40,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontWeight: '400',
    color: 'white',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'arial',
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
