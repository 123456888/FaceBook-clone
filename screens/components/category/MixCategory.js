import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import HeaderIcons from "../HeaderIcons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import All from "../../../api/allCategory";

const MixCategory = () => {
  const handleDetails = (item) => {
    navigation.navigate("productDetails", item);
  };

  const navigation = useNavigation();

  return (
    <View className="mt-10">
      <View>
        <View>
          <HeaderIcons />
        </View>
        <View className="border mt-3 border-gray-300"></View>
      </View>
      <View className="mt-2 mb-2">
        <View className="p-2 flex-row items-center justify-between">
          <View>
            <Text className="text-3xl font-bold">Mix category</Text>
          </View>
          <View className="flex-row items-center">
            <View className="bg-blue-100 rounded-full p-1 w-10 h-10 items-center justify-center">
              <Ionicons name="person" size={24} color="black" />
            </View>
            <View className="bg-blue-100 rounded-full p-1 w-10 h-10 items-center justify-center mx-2">
              <FontAwesome name="search" size={24} color="black" />
            </View>
          </View>
        </View>
        <View className="px-4 mt-2">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center bg-blue-100 rounded-full w-40 h-9 justify-center">
              <Feather name="edit" size={18} color="black" />
              <Text className="text-base mx-1">Sell</Text>
            </View>
            <Pressable
              onPress={() => navigation.navigate("allcategory")}
              className="flex-row items-center bg-blue-100 rounded-full w-40 h-9 justify-center"
            >
              <MaterialCommunityIcons
                name="menu-open"
                size={24}
                color="black"
              />
              <Text className="text-base mx-1">Categories</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View className="border mt-3 border-gray-200"></View>
      <View className="p-3">
        <View>
          <Text className="text-lg font-bold mb-2">Today's Picks</Text>
        </View>
        <View>
          <FlatList
            keyExtraction={(item) => item.id}
            data={All}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => (
              <View className="items-center">
                <Pressable onPress={() => handleDetails(item)}>
                  <View className="mx-1 mt-3">
                    <Image source={item.Image} className="h-60 w-40"></Image>
                    <Text className="text-base mx-2">₹ {item.price}</Text>
                  </View>
                </Pressable>
              </View>
            )}
          ></FlatList>
        </View>
      </View>
    </View>
  );
};

export default MixCategory;
