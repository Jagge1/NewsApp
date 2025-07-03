import { router } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E88E5",
  },

  text: {
    fontFamily: "Gill Sans",
    color: "white",
    fontSize: 30
  },

  logo: {
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: "Gill Sans",
    color: "white",
    fontSize: 80,
  },

  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,

  },

  getStartedBtn: {
    borderWidth: 2,
    borderColor: "white",
    padding: 7,
    borderRadius: 10,
    marginTop:10
  }
})

export default function Index() {
  return(

  <View style={styles.container}>
    <SafeAreaView style={{flex: 1}}>

      <View style={styles.contentContainer}>

        <Text style={styles.text}>
          Welcome to
        </Text>

        <Text style={styles.logo}>
          NewsCap
        </Text>

      <Button 
        title="Get started" 
        color="white"
        onPress={() => router.push("/screens/HomeScreen")}
        />

      </View>

    </SafeAreaView>
  </View>
  
  )
}
