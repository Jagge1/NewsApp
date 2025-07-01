import { View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
  return(



    <SafeAreaView>

      <View>

        <Text>
          Welcome to
        </Text>

        <Text>
          NewsCap
        </Text>

      <Pressable>
        <Text>Get started </Text>
      </Pressable>

      </View>


      
    </SafeAreaView>
  )
}
