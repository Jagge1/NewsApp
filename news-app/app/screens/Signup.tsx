import { View, Text, TextInput, Pressable } from "react-native";

export default function Signup() {
  return(
    <View className="px-6">
      <Text 
        className="
          self-center
          w-60
          text-center
          font-gill
          font-bold
          text-3xl
          mt-10
          bg-blue-600
          text-white
          p-3
          rounded
          mb-10
        "
      >
        NewsCap
      </Text>

      <Text className="mb-2">Email</Text>
      <TextInput 
        placeholder="Name"
        className="
          border
          border-[#ccc]
          p-2.5
          rounded
          mb-4
        "
      />

      <Text className="mb-2">Name</Text>
      <TextInput 
        placeholder="Name"
        className="
          border
          border-[#ccc]
          p-2.5
          rounded
          mb-4
        "
      />

      <Text className="mb-2">Create username</Text>
      <TextInput 
        placeholder="Name"
        className="
          border
          border-[#ccc]
          p-2.5
          rounded
          mb-4
        "
      />

      <Text className="mb-2">Password</Text>
      <TextInput 
        placeholder="Name"
        className="
          border
          border-[#ccc]
          p-2.5
          rounded
          mb-4
        "

      />
      <Pressable className="bg-blue-600 p-3 rounded mt-4">
        <Text className="text-white text-center font-semibold">Create user</Text>
      </Pressable>

      
    </View>
  )
}
