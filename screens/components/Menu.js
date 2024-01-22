import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HeaderIcons from "./HeaderIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Menu = () => {
  const navigation = useNavigation();

  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const backUp = async () => {
    try {
      const profileOne = await AsyncStorage.getItem("Image");
      const nameOne = await AsyncStorage.getItem("Name");
      setProfile(profileOne);
      setName(nameOne);
    } catch (e) {
      // error reading value
    }
  };
  backUp();

  const handleColor = () => {
    setColor(!color);
    setTimeout(() => {
      navigation.navigate("login");
    }, 1000);
  };

  return (
    <View>
      <View className="mt-10">
        <HeaderIcons />
        <View className="border border-gray-300 mt-2"></View>
        <View className="bg-blue-50 h-screen">
          <View className="p-4">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-3xl font-bold">Menu</Text>
              </View>
              <View className="flex-row items-center">
                <View className="bg-blue-100 p-2 items-center justify-center rounded-full">
                  <Ionicons name="settings" size={24} color="black" />
                </View>
                <View className="bg-blue-100 p-2 items-center justify-center rounded-full mx-2">
                  <FontAwesome name="search" size={24} color="black" />
                </View>
              </View>
            </View>
            <View className="mt-5">
              <View className="flex-row items-center">
                <View>
                  <Image
                    source={{ uri: profile }}
                    className="h-16 w-16 rounded-full"
                  ></Image>
                </View>
                <View className="mx-2">
                  <Text className="font-bold text-xl">{name}</Text>
                  <Pressable onPress={() => navigation.navigate("profileedit")}>
                    <Text className="text-gray-500">Edit your profile</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View className="border border-gray-200 mt-4"></View>
            <View className="mt-5">
              <View className="flex-row justify-between">
                <View>
                  <Pressable
                    className="border border-gray-200 bg-white w-40 h-20 rounded-xl p-3"
                    onPress={() => navigation.navigate("market")}
                  >
                    <MaterialCommunityIcons
                      name="home-flood"
                      size={30}
                      color="blue"
                    />
                    <Text className="text-base font-bold">Marketplace</Text>
                  </Pressable>
                </View>
                <View>
                  <Pressable
                    className="border border-gray-200 bg-white w-40 h-20 rounded-xl p-3"
                    onPress={() => navigation.navigate("fbReels")}
                  >
                    <MaterialCommunityIcons
                      name="video"
                      size={30}
                      color="green"
                    />
                    <Text className="text-base font-bold">Video</Text>
                  </Pressable>
                </View>
              </View>
              <View className="flex-row justify-between mt-1">
                <View>
                  <Pressable
                    className="border border-gray-200 bg-white w-40 h-20 rounded-xl p-3"
                    onPress={() => navigation.navigate("fbReels")}
                  >
                    <MaterialCommunityIcons
                      name="movie"
                      size={30}
                      color="pink"
                    />
                    <Text className="text-base font-bold">Reels</Text>
                  </Pressable>
                </View>
                <View>
                  <Pressable
                    className="border border-gray-200 bg-white w-40 h-20 rounded-xl p-3"
                    onPress={() => navigation.navigate("peopleknow")}
                  >
                    <FontAwesome name="user" size={30} color="orange" />
                    <Text className="text-base font-bold">Friends</Text>
                  </Pressable>
                </View>
              </View>
              <View className="bg-blue-100 rounded-lg items-center justify-center h-10 mt-5">
                <Text className="text-base">See more</Text>
              </View>
            </View>
          </View>
          <View className="border border-gray-200 mt-4"></View>
          <View className="p-3">
            <View className="flex-row items-center">
              <View className="p-1 rounded-full bg-blue-200">
                <AntDesign name="question" size={30} color="black" />
              </View>
              <View>
                <Text className="text-lg font-bold mx-2">Help & support</Text>
              </View>
            </View>
          </View>
          <View className="border border-gray-200 mt-1"></View>
          <View className="p-3">
            <View className="flex-row items-center">
              <View className="bg-blue-100 p-2 items-center justify-center rounded-full">
                <Ionicons name="settings" size={24} color="black" />
              </View>
              <View>
                <Text className="text-lg font-bold mx-2">
                  Setting & privacy
                </Text>
              </View>
            </View>
          </View>
          <View className="border border-gray-200 mt-1"></View>
          <View className="p-3">
            <Pressable
              className={
                color
                  ? "bg-red-300 items-center justify-center rounded-lg h-10"
                  : "bg-blue-100 items-center justify-center rounded-lg h-10"
              }
              onPress={handleColor}
            >
              <Text className="text-base">
                {color ? "Processing..." : "Logout"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Menu;
