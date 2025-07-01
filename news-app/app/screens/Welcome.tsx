import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  text: {
    fontFamily: "Gill Sans",
    color: "#7F7F7F",
    fontSize: 30
  },

  logo: {
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: "Gill Sans",
    color: "#1E88E5",
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
    borderColor: "#7F7F7F",
    padding: 7,
    borderRadius: 10,
    marginTop:10
  }
})

export default function Welcome() {
  return(



    <SafeAreaView style={styles.container}>

      <View style={styles.contentContainer}>

        <Text style={styles.text}>
          Welcome to
        </Text>

        <Text style={styles.logo}>
          NewsCap
        </Text>

      <Pressable style={styles.getStartedBtn}>
        <Text style={styles.text}>
          Get started   
        </Text>
      </Pressable>

      </View>


      
    </SafeAreaView>
  )
}
