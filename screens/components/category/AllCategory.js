import { View, Text, Pressable } from "react-native";
import React from "react";
import HeaderIcons from "../HeaderIcons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AllCategory = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View className="mt-10">
        <View>
          <HeaderIcons />
          <View className="border border-gray-300 mt-2"></View>
          <View className="bg-blue-50 h-screen">
            <View className="p-3 ">
              <Text className="text-xl font-bold">All category</Text>
            </View>
            <View>
              <Pressable
                className="flex-row items-center bg-white px-3 h-14 mt-5"
                onPress={() => navigation.navigate("mixcategory")}
              >
                <View className="p-2 rounded-full items-center justify-center bg-blue-100">
                  <MaterialIcons name="category" size={24} color="black" />
                </View>
                <View>
                  <Text className="mx-2 text-base font-bold">Mix Category</Text>
                </View>
              </Pressable>
              <Pressable
                className="flex-row items-center bg-white px-3 h-14 mt-1"
                onPress={() => navigation.navigate("babyproduct")}
              >
                <View className="p-2 rounded-full items-center justify-center bg-blue-100">
                  <MaterialCommunityIcons
                    name="baby-carriage"
                    size={24}
                    color="black"
                  />
                </View>
                <View>
                  <Text className="mx-2 text-base font-bold">
                    Baby products
                  </Text>
                </View>
              </Pressable>
              <Pressable
                className="flex-row items-center bg-white px-3 h-14 mt-1"
                onPress={() => navigation.navigate("bookitems")}
              >
                <View className="p-2 rounded-full items-center justify-center bg-blue-100">
                  <Entypo name="book" size={24} color="black" />
                </View>
                <View>
                  <Text className="mx-2 text-base font-bold">Books items</Text>
                </View>
              </Pressable>
              <Pressable
                className="flex-row items-center bg-white px-3 h-14 mt-1"
                onPress={() => navigation.navigate("topmovie")}
              >
                <View className="p-2 rounded-full items-center justify-center bg-blue-100">
                  <MaterialIcons name="movie" size={24} color="black" />
                </View>
                <View>
                  <Text className="mx-2 text-base font-bold">Top movies</Text>
                </View>
              </Pressable>
              <Pressable
                className="flex-row items-center bg-white px-3 h-14 mt-1"
                onPress={() => navigation.navigate("electronicitem")}
              >
                <View className="p-2 rounded-full items-center justify-center bg-blue-100">
                  <MaterialIcons
                    name="electrical-services"
                    size={24}
                    color="black"
                  />
                </View>
                <View>
                  <Text className="mx-2 text-base font-bold">
                    Electronics items
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AllCategory;
