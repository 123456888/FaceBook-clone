import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "./Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Data from "../../api/data";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import VideoReels from "./VideoReels";
import HeaderIcons from "./HeaderIcons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [text, setText] = useState("");
  const [arrayText, setArrayText] = useState([]);
  const [image, setImage] = useState(null);
  const [like, setLike] = useState(false);
  const [add, setAdd] = useState(false);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");

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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    setArrayText([...arrayText, { title: text }]);
    setText("");
  };

  return (
    <ScrollView className="mt-10">
      <View>
        <Header />
        <View className="mt-5">
          <HeaderIcons />
          <View className="border border-gray-300 mt-2"></View>
          <View>
            <View className="flex-row items-center justify-between px-3 mt-3">
              <View className="">
                <Image
                  source={{ uri: profile }}
                  className="h-12 w-12 rounded-full"
                ></Image>
              </View>
              <View>
                <TextInput
                  className="border border-gray-400 rounded-full w-60 h-10 p-1"
                  placeholderTextColor="black"
                  placeholder="Write something here..."
                  value={text}
                  onChangeText={(e) => setText(e)}
                ></TextInput>
              </View>
              <View>
                <Pressable onPress={pickImage}>
                  <Image
                    source={require("../../assets/images/gallery.png")}
                    className="h-7 w-7"
                  ></Image>
                </Pressable>
              </View>
            </View>
          </View>
          <View className="border-4 mt-3 border-gray-300"></View>
          <View>
            <View className="mt-3 px-3">
              <View className="flex-row items-center justify-between">
                <Text className="text-black font-bold text-base">
                  People you may know
                </Text>
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={28}
                  color="black"
                />
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtraction={(item) => item.id}
                data={Data}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <View className="border border-gray-300 mx-2 mt-3 rounded-xl p-2">
                        <Image
                          source={item.image}
                          className="h-64 w-64 rounded-xl"
                        ></Image>
                        <Text className="mx-3 mt-1 font-bold text-lg">
                          {item.name}
                        </Text>
                        <Pressable
                          className="border border-blue-500 bg-blue-500 rounded-xl p-2 items-center w-30 mt-10"
                          onPress={() => setAdd(!add)}
                        >
                          <Text className="text-white text-base">
                            {add ? "Cancel request" : "Add friend"}
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  );
                }}
              ></FlatList>
            </View>
          </View>
          <View className="border-4 mt-3 border-gray-300"></View>
          <VideoReels />
          <View className="border-4 mt-3 border-gray-300"></View>
          <View>
            {image && (
              <View>
                <View className="flex-row items-center p-3">
                  <Image
                    source={{ uri: profile }}
                    className="h-12 w-12 rounded-full"
                  ></Image>
                  <View className="mx-2">
                    <Text className="text-lg font-bold">{name}</Text>
                    <Text className="text-gray-400">Reccommended post</Text>
                  </View>
                </View>
                <View>
                  <View>
                    <View className="mt-5 mx-3">
                      <FlatList
                        data={arrayText}
                        renderItem={({ item }) => (
                          <View>
                            <Text className="text-gray-500 text-base">
                              {item.title}
                            </Text>
                          </View>
                        )}
                      ></FlatList>
                    </View>
                    <View className="p-1">
                      <Image source={{ uri: image }} className="h-72 w-full" />
                    </View>
                    <View className="mt-4 flex-row items-center justify-between mx-3">
                      <Pressable
                        className="flex-row items-center"
                        onPress={() => setLike(!like)}
                      >
                        {like ? (
                          <AntDesign name="like1" size={24} color="blue" />
                        ) : (
                          <AntDesign name="like2" size={24} color="black" />
                        )}
                        <Text className="text-gray-500 text-base mx-2">
                          Like
                        </Text>
                      </Pressable>
                      <Pressable className="flex-row items-center">
                        <FontAwesome name="comment-o" size={24} color="black" />
                        <Text className="text-gray-500 text-base mx-2">
                          Comment
                        </Text>
                      </Pressable>
                      <Pressable className="flex-row items-center">
                        <MaterialCommunityIcons
                          name="share-outline"
                          size={34}
                          color="black"
                        />
                        <Text className="text-gray-500 text-base mx-2">
                          Share
                        </Text>
                      </Pressable>
                    </View>
                    <View className="border border-gray-300 mt-3 mb-1"></View>
                  </View>
                </View>
              </View>
            )}
            <View>
              <View className="flex-row items-center px-3 mt-7">
                <Image
                  source={require("../../assets/images/boyOne.jpg")}
                  className="h-12 w-12 rounded-full"
                ></Image>
                <View className="mx-2">
                  <Text className="text-lg font-bold">Rahul Raj</Text>
                  <Text className="text-gray-400">Reccommended post</Text>
                </View>
              </View>
              <View>
                <View>
                  <View className="p-1">
                    <View className="p-1 mt-4">
                      <Text className="text-gray-500 text-base mx-1 text-justify">
                        Everything that we have around us have been gifted by
                        Mother Nature.
                      </Text>
                    </View>
                    <Image
                      source={require("../../assets/images/natureOne.jpg")}
                      className="h-72 w-full"
                    />
                  </View>
                  <View className="mt-4 flex-row items-center justify-between mx-3">
                    <Pressable
                      className="flex-row items-center"
                      onPress={() => setLike(!like)}
                    >
                      {like ? (
                        <AntDesign name="like1" size={24} color="blue" />
                      ) : (
                        <AntDesign name="like2" size={24} color="black" />
                      )}
                      <Text className="text-gray-500 text-base mx-2">Like</Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <FontAwesome name="comment-o" size={24} color="black" />
                      <Text className="text-gray-500 text-base mx-2">
                        Comment
                      </Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={34}
                        color="black"
                      />
                      <Text className="text-gray-500 text-base mx-2">
                        Share
                      </Text>
                    </Pressable>
                  </View>
                  <View className="border border-gray-300 mt-3 mb-10"></View>
                </View>
              </View>
            </View>
            <View>
              <View className="flex-row items-center px-3">
                <Image
                  source={require("../../assets/images/boyTwo.jpg")}
                  className="h-12 w-12 rounded-full"
                ></Image>
                <View className="mx-2">
                  <Text className="text-lg font-bold">Rishab Pratap Singh</Text>
                  <Text className="text-gray-400">Reccommended post</Text>
                </View>
              </View>
              <View>
                <View>
                  <View className="p-1">
                    <View className="p-1 mt-4">
                      <Text className="text-gray-500 text-base mx-1 text-justify">
                        Snow is a magical thing. It acts like an angel,
                        fluttering down from the sky with such grace and
                        elegance and softly lands on the earth..
                      </Text>
                    </View>
                    <Image
                      source={require("../../assets/images/natureTwo.jpg")}
                      className="h-72 w-full"
                    />
                  </View>
                  <View className="mt-4 flex-row items-center justify-between mx-3">
                    <Pressable
                      className="flex-row items-center"
                      onPress={() => setLike(!like)}
                    >
                      {like ? (
                        <AntDesign name="like1" size={24} color="blue" />
                      ) : (
                        <AntDesign name="like2" size={24} color="black" />
                      )}
                      <Text className="text-gray-500 text-base mx-2">Like</Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <FontAwesome name="comment-o" size={24} color="black" />
                      <Text className="text-gray-500 text-base mx-2">
                        Comment
                      </Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={34}
                        color="black"
                      />
                      <Text className="text-gray-500 text-base mx-2">
                        Share
                      </Text>
                    </Pressable>
                  </View>
                  <View className="border border-gray-300 mt-3 mb-10"></View>
                </View>
              </View>
            </View>
            <View>
              <View className="flex-row items-center px-3">
                <Image
                  source={require("../../assets/images/boyThree.jpg")}
                  className="h-12 w-12 rounded-full"
                ></Image>
                <View className="mx-2">
                  <Text className="text-lg font-bold">Prince Aditiya</Text>
                  <Text className="text-gray-400">Reccommended post</Text>
                </View>
              </View>
              <View>
                <View>
                  <View className="p-1">
                    <View className="p-1 mt-4">
                      <Text className="text-gray-500 text-base mx-1 text-justify">
                        This essay is about how I took a trip to India after
                        graduation with my friends. It was me and a couple of my
                        friends
                      </Text>
                    </View>
                    <Image
                      source={require("../../assets/images/natureThree.jpg")}
                      className="h-72 w-full"
                    />
                  </View>
                  <View className="mt-4 flex-row items-center justify-between mx-3">
                    <Pressable
                      className="flex-row items-center"
                      onPress={() => setLike(!like)}
                    >
                      {like ? (
                        <AntDesign name="like1" size={24} color="blue" />
                      ) : (
                        <AntDesign name="like2" size={24} color="black" />
                      )}
                      <Text className="text-gray-500 text-base mx-2">Like</Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <FontAwesome name="comment-o" size={24} color="black" />
                      <Text className="text-gray-500 text-base mx-2">
                        Comment
                      </Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={34}
                        color="black"
                      />
                      <Text className="text-gray-500 text-base mx-2">
                        Share
                      </Text>
                    </Pressable>
                  </View>
                  <View className="border border-gray-300 mt-3 mb-10"></View>
                </View>
              </View>
            </View>
            <View>
              <View className="flex-row items-center px-3">
                <Image
                  source={require("../../assets/images/boyFour.jpg")}
                  className="h-12 w-12 rounded-full"
                ></Image>
                <View className="mx-2">
                  <Text className="text-lg font-bold">Bhupesh Sharma</Text>
                  <Text className="text-gray-400">Reccommended post</Text>
                </View>
              </View>
              <View>
                <View>
                  <View className="p-1">
                    <View className="p-1 mt-4">
                      <Text className="text-gray-500 text-base mx-1 text-justify">
                        Temples are a symbol of peace and belief for Hindus. The
                        temple's main deity is the sculpture of a God or
                        Goddess.
                      </Text>
                    </View>
                    <Image
                      source={require("../../assets/images/natureFour.jpg")}
                      className="h-72 w-full"
                    />
                  </View>
                  <View className="mt-4 flex-row items-center justify-between mx-3">
                    <Pressable
                      className="flex-row items-center"
                      onPress={() => setLike(!like)}
                    >
                      {like ? (
                        <AntDesign name="like1" size={24} color="blue" />
                      ) : (
                        <AntDesign name="like2" size={24} color="black" />
                      )}
                      <Text className="text-gray-500 text-base mx-2">Like</Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <FontAwesome name="comment-o" size={24} color="black" />
                      <Text className="text-gray-500 text-base mx-2">
                        Comment
                      </Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={34}
                        color="black"
                      />
                      <Text className="text-gray-500 text-base mx-2">
                        Share
                      </Text>
                    </Pressable>
                  </View>
                  <View className="border border-gray-300 mt-3 mb-10"></View>
                </View>
              </View>
            </View>
            <View>
              <View className="flex-row items-center px-3">
                <Image
                  source={require("../../assets/images/boyFive.jpg")}
                  className="h-12 w-12 rounded-full"
                ></Image>
                <View className="mx-2">
                  <Text className="text-lg font-bold">Harsh Sharma</Text>
                  <Text className="text-gray-400">Reccommended post</Text>
                </View>
              </View>
              <View>
                <View>
                  <View className="p-1">
                    <View className="p-1 mt-4">
                      <Text className="text-gray-500 text-base mx-1 text-justify">
                        It's a beautiful amalgamation of shared experiences,
                        learning, and bonding. This essay narrates one such trip
                        with my family,
                      </Text>
                    </View>
                    <Image
                      source={require("../../assets/images/natureFive.jpg")}
                      className="h-72 w-full"
                    />
                  </View>
                  <View className="mt-4 flex-row items-center justify-between mx-3">
                    <Pressable
                      className="flex-row items-center"
                      onPress={() => setLike(!like)}
                    >
                      {like ? (
                        <AntDesign name="like1" size={24} color="blue" />
                      ) : (
                        <AntDesign name="like2" size={24} color="black" />
                      )}
                      <Text className="text-gray-500 text-base mx-2">Like</Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <FontAwesome name="comment-o" size={24} color="black" />
                      <Text className="text-gray-500 text-base mx-2">
                        Comment
                      </Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={34}
                        color="black"
                      />
                      <Text className="text-gray-500 text-base mx-2">
                        Share
                      </Text>
                    </Pressable>
                  </View>
                  <View className="border border-gray-300 mt-3 mb-10"></View>
                </View>
              </View>
            </View>
            <View>
              <View className="flex-row items-center px-3">
                <Image
                  source={require("../../assets/images/boySix.jpeg")}
                  className="h-12 w-12 rounded-full"
                ></Image>
                <View className="mx-2">
                  <Text className="text-lg font-bold">Ritu Verma</Text>
                  <Text className="text-gray-400">Reccommended post</Text>
                </View>
              </View>
              <View>
                <View>
                  <View className="p-1">
                    <View className="p-1 mt-4">
                      <Text className="text-gray-500 text-base mx-1 text-justify">
                        Traveling is always the main source of gathering
                        practical knowledge and experience from the nature,
                        society, culture, country and so on.
                      </Text>
                    </View>
                    <Image
                      source={require("../../assets/images/natureSix.jpg")}
                      className="h-72 w-full"
                    />
                  </View>
                  <View className="mt-4 flex-row items-center justify-between mx-3">
                    <Pressable
                      className="flex-row items-center"
                      onPress={() => setLike(!like)}
                    >
                      {like ? (
                        <AntDesign name="like1" size={24} color="blue" />
                      ) : (
                        <AntDesign name="like2" size={24} color="black" />
                      )}
                      <Text className="text-gray-500 text-base mx-2">Like</Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <FontAwesome name="comment-o" size={24} color="black" />
                      <Text className="text-gray-500 text-base mx-2">
                        Comment
                      </Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={34}
                        color="black"
                      />
                      <Text className="text-gray-500 text-base mx-2">
                        Share
                      </Text>
                    </Pressable>
                  </View>
                  <View className="border border-gray-300 mt-3 mb-10"></View>
                </View>
              </View>
            </View>
            <View>
              <View className="flex-row items-center px-3">
                <Image
                  source={require("../../assets/images/boyEight.jpg")}
                  className="h-12 w-12 rounded-full"
                ></Image>
                <View className="mx-2">
                  <Text className="text-lg font-bold">Rahul Raj</Text>
                  <Text className="text-gray-400">Reccommended post</Text>
                </View>
              </View>
              <View>
                <View>
                  <View className="p-1">
                    <View className="p-1 mt-4">
                      <Text className="text-gray-500 text-base mx-1 text-justify">
                        Travelling on foot or on animals was the only option
                        back then. Ships were also an option but they were too
                        risky.
                      </Text>
                    </View>
                    <Image
                      source={require("../../assets/images/natureSeven.jpg")}
                      className="h-72 w-full"
                    />
                  </View>
                  <View className="mt-4 flex-row items-center justify-between mx-3">
                    <Pressable
                      className="flex-row items-center"
                      onPress={() => setLike(!like)}
                    >
                      {like ? (
                        <AntDesign name="like1" size={24} color="blue" />
                      ) : (
                        <AntDesign name="like2" size={24} color="black" />
                      )}
                      <Text className="text-gray-500 text-base mx-2">Like</Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <FontAwesome name="comment-o" size={24} color="black" />
                      <Text className="text-gray-500 text-base mx-2">
                        Comment
                      </Text>
                    </Pressable>
                    <Pressable className="flex-row items-center">
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={34}
                        color="black"
                      />
                      <Text className="text-gray-500 text-base mx-2">
                        Share
                      </Text>
                    </Pressable>
                  </View>
                  <View className="border border-gray-300 mt-3 mb-10"></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
