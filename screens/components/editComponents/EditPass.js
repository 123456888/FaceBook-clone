import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import HeaderIcons from "../HeaderIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const EditPass = () => {
  const navigation = useNavigation();

  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(!change);
    setTimeout(() => {
      navigation.goBack();
    }, 1000);
  };

  return (
    <View className="mt-10">
      <View>
        <HeaderIcons />
        <View className="border border-gray-300 mt-2"></View>
        <View className="p-3 bg-blue-50 h-screen">
          <View className="flex-row items-center">
            <View>
              <Text className="text-xl font-bold">Edit password</Text>
            </View>
            <View className="p-2 rounded-full bg-blue-100 items-center justify-center h-10 w-10 mx-2">
              <FontAwesome5 name="user-edit" size={20} color="black" />
            </View>
          </View>
          <View className="mt-10">
            <View className="bg-white rounded-lg p-2">
              <TextInput
                placeholder="current password..."
                className=""
              ></TextInput>
            </View>
            <View className="bg-white rounded-lg p-2 mt-1">
              <TextInput placeholder="new password..."></TextInput>
            </View>
            <View className="bg-white rounded-lg p-2 mt-1">
              <TextInput placeholder="confirm password..."></TextInput>
            </View>
            <Pressable
              className="bg-blue-400 items-center justify-center h-10 rounded-lg mt-2"
              onPress={handleChange}
            >
              {change ? (
                <Text className="text-white font-bold">Changed</Text>
              ) : (
                <Text className="text-white font-bold">Change</Text>
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditPass;
