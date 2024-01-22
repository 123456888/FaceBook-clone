import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Registration = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("female");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState(null);

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorDob, setErrorDob] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorImage, setErrorImage] = useState(false);
  const [viewPass, setViewPass] = useState(false);
  const [load, setLoad] = useState(false);

  const handleName = (e) => {
    setName(e);
    setErrorName(false);
  };

  const handleEmail = (e) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    setEmail(e);
    setErrorEmail(false);
    if (re.test(e) || regex.test(e)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  const handlePass = (e) => {
    setPassword(e);
    setErrorPass(false);
  };
  const handleNumber = (e) => {
    setNumber(e);
    setErrorPhone(false);
  };

  const handleSignup = async () => {
    if (!name) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
    if (!email) {
      setErrorEmail(true);
    }
    if (!password) {
      setErrorPass(true);
    } else {
      setErrorPass(false);
    }
    if (!finalDate) {
      setErrorDob(true);
    } else {
      setErrorDob(false);
    }
    if (!number) {
      setErrorPhone(true);
    } else {
      setErrorPhone(false);
    }
    if (!image) {
      setErrorImage(true);
    } else {
      setErrorImage(false);
    }
    if (!name || !email || !password || !finalDate || !number || !image) {
      return false;
    }
    setLoad(true);
    try {
      await AsyncStorage.setItem("Name", name);
      await AsyncStorage.setItem("Email", email);
      await AsyncStorage.setItem("Password", password);
      await AsyncStorage.setItem("DOM", finalDate);
      await AsyncStorage.setItem("Gender", selectedRadio);
      await AsyncStorage.setItem("Phone", number);
      await AsyncStorage.setItem("Image", image);
      setTimeout(() => {
        navigation.navigate("login");
        alert("Register Successfull!");
      }, 6000);
    } catch (e) {
      console.log("Data not save!");
    }
    setName("");
    setEmail("");
    setPassword("");
    setFinalDate("");
    setSelectedRadio("female");
    setNumber("");
    setImage("");
  };

  const navigation = useNavigation();

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
  };

  return (
    <ScrollView className="bg-blue-950 h-screen mt-10">
      <View className="mt-3 mx-3">
        <Pressable onPress={() => navigation.goBack()}>
          <View>
            <Ionicons name="arrow-back" size={30} color="white" />
          </View>
        </Pressable>
        <View className="items-center">
          <View>
            <View className="mt-10">
              <Text className="text-white font-bold text-3xl">
                What's your name?
              </Text>
              <Text className="text-white mt-2 text-base">
                Enter the name you use in real life.
              </Text>
            </View>
            <View className="mt-10">
              <View>
                <View className="text-white border-2 w-80 h-14 px-2 rounded-2xl bg-gray-800 border-gray-500 flex-row items-center">
                  <AntDesign name="user" size={20} color="gray" />
                  <TextInput
                    placeholderTextColor="gray"
                    value={name}
                    className="mx-2 text-gray-400 w-60"
                    onChangeText={handleName}
                    placeholder="Full name"
                  ></TextInput>
                </View>
                {errorName ? (
                  <Text className="text-red-400 mx-3">name is required!</Text>
                ) : null}
                <View className="text-white border-2 w-80 h-14 px-2 mt-2 rounded-2xl bg-gray-800 border-gray-500 flex-row items-center">
                  <Fontisto name="email" size={20} color="gray" />
                  <TextInput
                    placeholderTextColor="gray"
                    value={email}
                    className="mx-2 text-gray-400 w-60"
                    onChangeText={handleEmail}
                    placeholder="Email-id"
                  ></TextInput>
                </View>
                {validEmail ? (
                  <Text className="text-red-400 mx-3">
                    wrong pattern of email-id!
                  </Text>
                ) : null}
                {errorEmail ? (
                  <Text className="text-red-400 mx-3">
                    email-id is required!
                  </Text>
                ) : null}
                <View className="text-white border-2 w-80 h-14 px-2 mt-2 rounded-2xl bg-gray-800 border-gray-500 flex-row items-center">
                  <Ionicons name="lock-closed-outline" size={20} color="gray" />
                  <TextInput
                    secureTextEntry={!viewPass}
                    placeholderTextColor="gray"
                    value={password}
                    className="mx-2 text-gray-400 w-60"
                    onChangeText={handlePass}
                    placeholder="Password"
                  ></TextInput>
                  <Pressable onPress={() => setViewPass(!viewPass)}>
                    <Feather
                      name={viewPass ? "eye" : "eye-off"}
                      size={24}
                      color="gray"
                    />
                  </Pressable>
                </View>
                {errorPass ? (
                  <Text className="text-red-400 mx-3">
                    password is required!
                  </Text>
                ) : null}
                <View className="flex-row items-center justify-between border-2 w-80 h-14 px-2 rounded-2xl bg-gray-800 border-gray-500 mt-2">
                  <TextInput
                    className="text-white "
                    placeholderTextColor="gray"
                    placeholder="Date-of-birth"
                  >
                    {finalDate}
                  </TextInput>
                  <Pressable onPress={() => setShowModal(true)}>
                    <Entypo name="calendar" size={24} color="gray" />
                  </Pressable>
                </View>
                {errorDob ? (
                  <Text className="text-red-400 mx-3">
                    date of birth is required!
                  </Text>
                ) : null}
                <Modal visible={showModal} animationType="slide">
                  <Calendar
                    className="borderRadius-4 w-72 mx-10 border-2 mt-5 border-gray-400 rounded-lg"
                    onDayPress={(date) => {
                      setFinalDate(date.dateString);
                      setShowModal(false);
                    }}
                    initialDate={"2023-09-10"}
                  ></Calendar>
                </Modal>
              </View>
            </View>
            <View className="mt-8">
              <Text className="text-gray-300 text-xl font-bold">
                Your Gender
              </Text>
              <View className="border border-gray-400 bg-gray-800 p-5 rounded-xl mt-3 w-80">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Fontisto name="female" size={18} color="gray" />
                    <Text className="text-gray-500 text-base mx-2">Female</Text>
                  </View>
                  <Pressable onPress={() => setSelectedRadio("female")}>
                    <View className="border border-gray-400 h-5 w-5 rounded-full items-center justify-center">
                      {selectedRadio === "female" ? (
                        <View className="bg-gray-400 h-4 w-4 rounded-full"></View>
                      ) : null}
                    </View>
                  </Pressable>
                </View>
                <View className="flex-row items-center justify-between mt-8">
                  <View className="flex-row items-center">
                    <Fontisto name="male" size={18} color="gray" />
                    <Text className="text-gray-500 text-base mx-2">Male</Text>
                  </View>
                  <Pressable onPress={() => setSelectedRadio("male")}>
                    <View className="border border-gray-400 h-5 w-5 rounded-full items-center justify-center">
                      {selectedRadio === "male" ? (
                        <View className="bg-gray-400 h-4 w-4 rounded-full"></View>
                      ) : null}
                    </View>
                  </Pressable>
                </View>
                <View className="flex-row items-center justify-between mt-8">
                  <View>
                    <Text className="text-gray-300 font-bold text-lg">
                      More options
                    </Text>
                    <Text className="text-gray-500 text-base">
                      Select More options to choose
                    </Text>
                    <Text className="text-gray-500 text-base">
                      Another gender or if you'd rather
                    </Text>
                    <Text className="text-gray-500 text-base">not say.</Text>
                  </View>
                  <Pressable onPress={() => setSelectedRadio("other")}>
                    <View className="border border-gray-400 h-5 w-5 rounded-full items-center justify-center">
                      {selectedRadio === "other" ? (
                        <View className="bg-gray-400 h-4 w-4 rounded-full"></View>
                      ) : null}
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
            <View>
              <View className="mt-5">
                <View className="text-white border-2 w-80 h-14 px-2 rounded-2xl bg-gray-800 border-gray-500 flex-row items-center">
                  <Feather name="phone" size={20} color="gray" />
                  <TextInput
                    keyboardType="numeric"
                    className="mx-2 text-gray-400 w-60"
                    placeholderTextColor="gray"
                    placeholder="Mobile Number"
                    value={number}
                    onChangeText={handleNumber}
                  ></TextInput>
                </View>
                {errorPhone ? (
                  <Text className="text-red-400 mx-3">number is required!</Text>
                ) : null}
              </View>
            </View>
            <View className="mt-5">
              <Text className="text-gray-300 text-lg font-bold mb-2">
                Add profile picture
              </Text>
              <View className="border border-gray-400 w-80 p-2 rounded-xl">
                <View className="flex-row items-center justify-between">
                  <Pressable onPress={pickImage}>
                    <Entypo name="folder" size={28} color="gray" />
                  </Pressable>
                  <View className="h-11 mx-1 w-11 items-center justify-center rounded-full border border-gray-400 bg-gray-300">
                    {image && (
                      <Image
                        source={{ uri: image }}
                        className="h-10 w-10 rounded-full"
                      />
                    )}
                  </View>
                </View>
              </View>
              {errorImage ? (
                <Text className="text-red-400 mx-3">photo is required!</Text>
              ) : null}
            </View>
            <View>
              <Pressable
                className="w-80 rounded-full p-3 items-center mt-10 border border-gray-500"
                onPress={handleSignup}
              >
                {load ? (
                  <Image
                    source={require("../../assets/images/loading.gif")}
                    className="h-5 w-10"
                  ></Image>
                ) : (
                  <Text className="text-white text-base font-bold">
                    Sign up
                  </Text>
                )}
              </Pressable>
            </View>
            <View className="items-center mt-5">
              <Text className="text-white text-base font-bold">
                Already have a account?
              </Text>
            </View>
            <View>
              <Pressable
                className="w-80 rounded-full p-3 items-center mt-2 mb-10 border border-gray-500 bg-blue-300"
                onPress={() => navigation.navigate("login")}
              >
                <Text className="text-white text-base font-bold">Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Registration;
