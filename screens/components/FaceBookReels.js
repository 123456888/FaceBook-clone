import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import SwiperFlatList from "react-native-swiper-flatlist";
import Data from "../../api/videoData";
import { Video, ResizeMode } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FaceBookReels = () => {
  const navigation = useNavigation();
  const [color, setColor] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);

  return (
    <View className="h-full w-full">
      <SwiperFlatList
        vertical
        keyExtraction={(item) => item.id}
        data={Data}
        renderItem={({ item }) => (
          <View>
            <View className="">
              <Video
                source={item.video}
                useNativeControls
                resizeMode={ResizeMode.COVER}
                className="h-screen w-cover"
                style={{ height: 784 }}
              ></Video>
            </View>
            <View className="absolute">
              <View className="flex-row items-center px-5 mt-10">
                <View className="flex-row items-center">
                  <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={34} color="white" />
                  </Pressable>
                  <Text className="text-xl mx-3 font-bold text-white">
                    Reels
                  </Text>
                </View>
                <View className="flex-row items-center mx-24">
                  <Ionicons name="camera-outline" size={33} color="white" />
                  <Ionicons
                    name="search"
                    size={29}
                    color="white"
                    style={{ marginLeft: 10 }}
                  />
                  <SimpleLineIcons
                    name="user"
                    size={25}
                    color="white"
                    style={{ marginLeft: 10 }}
                  />
                </View>
              </View>
              <View className="mt-40 mx-5">
                <View>
                  <Pressable onPress={() => setColor(!color)} className="w-20">
                    <Ionicons
                      name="md-heart-sharp"
                      size={34}
                      color={color ? "red" : "white"}
                    />
                  </Pressable>
                  <View className="mx-1">
                    <Text className="text-white">6.5k</Text>
                  </View>
                </View>
                <View>
                  <Pressable
                    className="mt-6 w-20"
                    onPress={() => setLike(!like)}
                  >
                    <AntDesign
                      name="like1"
                      size={34}
                      color={like ? "blue" : "white"}
                    />
                  </Pressable>
                  <View className="mx-1">
                    <Text className="text-white">2.3k</Text>
                  </View>
                </View>
                <Pressable
                  className="mt-8 w-20"
                  onPress={() => setDisLike(!dislike)}
                >
                  <AntDesign
                    name="dislike1"
                    size={34}
                    color={dislike ? "red" : "white"}
                  />
                </Pressable>
                <Pressable className="mt-8 w-20">
                  <FontAwesome name="comment" size={34} color="white" />
                  <Text className="text-white mx-1">1.2K</Text>
                </Pressable>
                <Pressable className="mt-8 w-20">
                  <FontAwesome name="share" size={34} color="white" />
                  <Text className="text-white mx-1">2.2K</Text>
                </Pressable>
                <View className="flex-row items-center mt-8">
                  <Text className="text-white text-base">Views </Text>
                  <Text className="text-red-300 text-sm mx-1">
                    {item.views}
                  </Text>
                </View>
              </View>
              <View className="mt-5">
                <View className="flex-row items-center">
                  <View className="border border-gray-300 bg-gray-300 mx-3 h-10 w-10 items-center rounded-full justify-center">
                    <FontAwesome name="user" size={24} color="black" />
                  </View>
                  <View>
                    <Text className="text-white text-lg font-bold">
                      {item.author}
                    </Text>
                  </View>
                </View>
                <View className="mx-5 mt-5">
                  <Text className="text-base text-white">{item.title}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      ></SwiperFlatList>
    </View>
  );
};

export default FaceBookReels;
