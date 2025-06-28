import { View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient} from 'expo-linear-gradient';

export default function Welcome() {
  return(



    <SafeAreaView>

      <View>

        <Text className="self-center">
          Welcome to
        </Text>

        <Text className="text-3xl self-center">
          NewsCap
        </Text>

      <Pressable className="bg-blue-600 p-3 rounded-3xl mt-4 w-40 self-center">
        <Text className="text-white text-center font-semibold">Get started </Text>
      </Pressable>

      </View>


      
    </SafeAreaView>
  )
}
