import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = (item) => {
  const data = item.route.params;

  const navigation = useNavigation();

  const [isFav, setIsFav] = useState(false);
  const [follow, setFollow] = useState(false);

  return (
    <ScrollView>
      <View className="">
        <View className="items-center">
          <Image
            source={data.Image}
            className="h-96 w-72 mt-10 rounded-lg"
          ></Image>
        </View>
        <View className="absolute flex-row items-center">
          <Pressable onPress={() => navigation.goBack()}>
            <View className="mt-16 mx-3 bg-blue-100 rounded-full p-1">
              <Ionicons name="ios-arrow-back-outline" size={30} color="black" />
            </View>
          </Pressable>
          <Pressable onPress={() => setIsFav(!isFav)}>
            <View className="mt-20 mx-60 bg-blue-100 rounded-full p-1 justify-center items-center">
              <Ionicons
                name="md-heart-sharp"
                size={30}
                color={isFav ? "red" : "black"}
              />
            </View>
          </Pressable>
        </View>
        <View className="p-3">
          <Text className="text-xl font-bold">{data.title}</Text>
          <Text className="text-lg">₹ {data.price}</Text>
        </View>
        <View className="border border-gray-200 mt-2"></View>
        <View className="flex-row justify-between px-10 mt-5 mb-3">
          <View className="items-center">
            <View className="bg-blue-100 p-1 rounded-full h-10 w-10 items-center justify-center">
              <MaterialIcons name="notifications" size={24} color="black" />
            </View>
            <Text className="mt-1">Alerts</Text>
          </View>
          <View className="items-center">
            <View className="bg-blue-100 p-1 rounded-full h-10 w-10 items-center justify-center">
              <FontAwesome5 name="hand-holding-usd" size={24} color="black" />
            </View>
            <Text className="mt-1">Send offer</Text>
          </View>
          <View className="items-center">
            <View className="bg-blue-100 p-1 rounded-full h-10 w-10 items-center justify-center">
              <FontAwesome5 name="share" size={24} color="black" />
            </View>
            <Text className="mt-1">Share</Text>
          </View>
          <View className="items-center">
            <View className="bg-blue-100 p-1 rounded-full h-10 w-10 items-center justify-center">
              <Entypo name="save" size={24} color="black" />
            </View>
            <Text className="mt-1">Save</Text>
          </View>
        </View>
        <View className="border border-gray-200 mt-2"></View>
        <View className="p-3">
          <View>
            <Text className="text-xl font-bold">Description</Text>
          </View>
          <View>
            <Text className="text-base text-justify">{data.description}</Text>
          </View>
        </View>
        <View className="border border-gray-200 mt-2"></View>
        <View>
          <View className="p-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold">Seller information</Text>
              <Pressable>
                <Text className="text-base text-blue-700">Seller details</Text>
              </Pressable>
            </View>
            <View className="mt-5 mb-5">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="border-2 border-gray-400 rounded-full h-16 w-16 items-center justify-center">
                    <Image
                      source={data.userImage}
                      className="h-16 w-16 rounded-full"
                    ></Image>
                  </View>
                  <View>
                    <Text className="text-lg font-bold mx-2">
                      {data.userName}
                    </Text>
                    <Text className="mx-2 text-gray-500">
                      Joined Facebook in 2011
                    </Text>
                  </View>
                </View>
                <View>
                  <Pressable
                    className="px-3 h-10 bg-blue-100 items-center rounded-lg justify-center"
                    onPress={() => setFollow(!follow)}
                  >
                    {follow ? (
                      <Text className="text-gray-500 font-bold">Followed</Text>
                    ) : (
                      <Text className="text-gray-500 font-bold">Follow</Text>
                    )}
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
