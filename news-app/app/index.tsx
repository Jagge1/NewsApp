import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import Welcome from "./screens/Welcome";

export default function Index() {
  return (
    <View style={styles.appContainer}>
      <Welcome></Welcome>
    </View>  
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
