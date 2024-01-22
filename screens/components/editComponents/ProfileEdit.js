import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import HeaderIcons from "../HeaderIcons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

const ProfileEdit = () => {
  const navigation = useNavigation();

  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [deleteField, setDeleteField] = useState(false);
  const [process, setProcess] = useState(false);

  const handleDelete = () => {
    setProcess(true);
    setTimeout(async () => {
      try {
        await AsyncStorage.removeItem("Email");
        navigation.navigate("login");
        return true;
      } catch (exception) {
        return false;
      }
    }, 2000);
  };

  const handleCancel = () => {
    setDeleteField(false);
  };

  const backUp = async () => {
    try {
      const profileOne = await AsyncStorage.getItem("Image");
      const nameOne = await AsyncStorage.getItem("Name");
      setProfile(profileOne);
      setName(nameOne);
    } catch (e) {
      console.log("Error occur!");
    }
  };
  backUp();

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    try {
      const profileTwo = await AsyncStorage.setItem("Image", image);
      setProfile(profileTwo);
    } catch (e) {
      console.log("Error occurs!");
    }

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView className="mt-10 bg-blue-50 h-full">
      <View>
        <View>
          <HeaderIcons />
        </View>
        <View className="border border-gray-300 mt-4"></View>
        <View className="">
          <View>
            <View className="items-center mt-24">
              <Image
                source={{ uri: profile }}
                className="h-40 w-40 rounded-full"
              ></Image>
            </View>
            <View className="absolute mt-56 mx-52">
              <Pressable
                className="p-1 rounded-full bg-blue-100 w-10 h-10 items-center justify-center"
                onPress={pickImage}
              >
                <AntDesign name="camera" size={24} color="black" />
              </Pressable>
            </View>
            <View className="mt-5 items-center">
              <View className="flex-row items-center">
                <Text className="text-2xl font-bold mx-2">{name}</Text>
              </View>
            </View>
            <View>
              <View className="py-3 mb-3">
                <Pressable onPress={() => navigation.navigate("editname")}>
                  <View className="flex-row items-center p-3 bg-white">
                    <View className="p-2 rounded-full bg-blue-100">
                      <MaterialIcons name="edit" size={24} color="black" />
                    </View>
                    <Text className="text-base font-bold mx-2">Edit name</Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("editemail")}>
                  <View className="flex-row items-center p-3 mt-1 bg-white">
                    <View className="p-2 rounded-full bg-blue-100">
                      <MaterialCommunityIcons
                        name="email-edit"
                        size={24}
                        color="black"
                      />
                    </View>
                    <Text className="text-base font-bold mx-2">Edit email</Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("editpass")}>
                  <View className="flex-row items-center p-3 mt-1 bg-white">
                    <View className="p-2 rounded-full bg-blue-100">
                      <MaterialCommunityIcons
                        name="application-edit"
                        size={20}
                        color="black"
                      />
                    </View>
                    <Text className="text-base font-bold mx-2">
                      Edit password
                    </Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("editphone")}>
                  <View className="flex-row items-center p-3 mt-1 bg-white">
                    <View className="bg-blue-100 rounded-full p-2">
                      <FontAwesome5 name="phone" size={20} color="black" />
                    </View>
                    <Text className="text-base font-bold mx-2">
                      Edit phone number
                    </Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => setDeleteField(!deleteField)}>
                  <View className="flex-row items-center p-3 mt-1 bg-white mb-2">
                    <View className="p-1 rounded-full bg-blue-100">
                      <MaterialCommunityIcons
                        name="delete-forever"
                        size={24}
                        color="red"
                      />
                    </View>
                    <Text className="text-base font-bold mx-2 text-red-600">
                      Delete account
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
      {deleteField ? (
        <View className="absolute mt-16 mx-4">
          <View className=" bg-white p-4 rounded-lg">
            <View className="items-center">
              <View className="bg-red-100 rounded-full h-10 w-10 items-center justify-center">
                <AntDesign name="warning" size={24} color="red" />
              </View>
              <View>
                <Text className="font-bold text-lg mt-2 mb-3">
                  Are you sure?
                </Text>
              </View>
              <View className="items-center mb-3">
                <Text className="text-base text-gray-400">
                  This action cannot be undone . All values
                </Text>
                <Text className="text-base text-gray-400">
                  associated with this fiel will be lost
                </Text>
              </View>
              <View>
                <Pressable
                  className="bg-red-700 w-72 h-10 rounded-lg items-center justify-center"
                  onPress={handleDelete}
                >
                  <Text className="text-white font-bold">
                    {process ? "Processing..." : "Delete field"}
                  </Text>
                </Pressable>
                <Pressable
                  className="border border-gray-300 mt-3 w-72 h-10 rounded-lg items-center justify-center mb-5"
                  onPress={handleCancel}
                >
                  <Text className="font-bold">cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default ProfileEdit;
