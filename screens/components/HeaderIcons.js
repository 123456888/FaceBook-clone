import { View, Text, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderIcons = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View className="flex-row items-center justify-between px-5">
        <Pressable onPress={() => navigation.navigate("homescreen")}>
          <Entypo name="home" size={28} color="black" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("peopleknow")}>
          <Ionicons name="people" size={29} color="black" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("fbReels")}>
          <Entypo name="folder-video" size={25} color="black" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("market")}>
          <MaterialCommunityIcons
            name="home-analytics"
            size={31}
            color="black"
          />
        </Pressable>
        <Pressable>
          <Ionicons name="md-notifications-sharp" size={28} color="black" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("menu")}>
          <SimpleLineIcons name="menu" size={25} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderIcons;
