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
          font-medium
          text-4xl
          mt-10
          p-3
          rounded
          mb-10
        "
      >
        Sign Up
      </Text>


      <Text className="mb-2 text-gray-500">First Name</Text>
      <TextInput 
        placeholder="Name"
        className="
          border
          border-[#ccc]
          p-2.5
          rounded-xl
          mb-4
        "
      />

      <Text className="mb-2 text-gray-500">Last Name</Text>
      <TextInput 
        placeholder="Name"
        className="
          border
          border-[#ccc]
          p-2.5
          rounded-xl
          mb-4
        "
      />

      <Text className="mb-2 text-gray-500">Email</Text>
      <TextInput 
        placeholder="Name"
        className="
          border
          border-[#ccc]
          p-2.5
          rounded-xl
          mb-4
        "
      />

      <Text className="mb-2 text-gray-500">Password</Text>
      <TextInput 
        placeholder="Name"
        className="
          border
          border-[#ccc]
          p-2.5
          rounded-xl
          mb-4
        "

      />
      <Text className="mb-2 text-gray-500">Confirm Password</Text>
      <TextInput 
        placeholder="Name"
        className="
          border
          border-[#ccc]
          p-2.5
          rounded-xl
          mb-4
        "

      />
      <Pressable className="bg-blue-600 p-3 rounded mt-4 w-40 self-center">
        <Text className="text-white text-center font-semibold">Create user</Text>
      </Pressable>

      
    </View>
  )
}
