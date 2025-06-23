import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 justify-center items-center"
    >
      <Text className="text-5xl text-primary font-bold">NewsCap</Text>

      <Link href="./onboarding">Onboarding</Link>
      <Link href="./news/ article">CNN</Link>

    </View>

    
  );
}
