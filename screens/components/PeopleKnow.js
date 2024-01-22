import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import HeaderIcons from "./HeaderIcons";
import Data from "../../api/data";

const PeopleKnow = () => {
  return (
    <View className="mt-10">
      <View>
        <View>
          <HeaderIcons />
        </View>
        <View className="border border-gray-300 mt-2"></View>
      </View>
      <View>
        <View className="p-3">
          <View>
            <Text className="text-base font-bold mb-3">
              People you may know
            </Text>
          </View>
          <FlatList
            keyExtraction={(item) => item.id}
            data={Data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="mt-5 flex-row items-center">
                <View>
                  <Image
                    source={item.image}
                    className="h-20 w-20 rounded-full"
                  ></Image>
                </View>
                <View className="mx-3">
                  <Text className="mb-2 font-bold">{item.name}</Text>
                  <View className="flex-row items-center">
                    <Pressable className="items-center bg-blue-600 px-5 py-2 rounded-lg">
                      <Text className="text-white text-base">Add Friend</Text>
                    </Pressable>
                    <Pressable className="items-center bg-blue-200 px-8 py-2 rounded-lg mx-2">
                      <Text className="text-black text-base">Remove</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
          ></FlatList>
        </View>
      </View>
    </View>
  );
};

export default PeopleKnow;
