import { View, Text, TextInput, Button } from "react-native";

export default function Signup() {
  return(
    <View>
      <Text>Sign up</Text>
      <TextInput 
          placeholder="Name"
          style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 5,
          marginBottom: 15
          }}/>
    </View>
  )
}