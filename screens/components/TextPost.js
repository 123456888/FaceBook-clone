import { View, Text, TextInput, Image, Pressable } from "react-native";
import React from "react";

const TextPost = () => {
  return (
    <View>
      <View>
        <View className="flex-row items-center justify-between px-3 mt-3">
          <View className="">
            <Image
              source={require("../../assets/images/boyTwo.jpg")}
              className="h-12 w-12 rounded-full"
            ></Image>
          </View>
          <View>
            <TextInput
              className="border border-gray-400 rounded-full w-60 h-10 p-1"
              placeholderTextColor="black"
              placeholder="Write something here..."
            ></TextInput>
          </View>
          <View>
            <Pressable>
              <Image
                source={require("../../assets/images/gallery.png")}
                className="h-7 w-7"
              ></Image>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TextPost;
