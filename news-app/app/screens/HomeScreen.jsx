import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E88E5",
    justifyContent: "center",
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
    textAlign: "center",
    marginBottom: 100
  },
})

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Home Screen</Text>
  
    </View>
  );
}