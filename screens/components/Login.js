import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [process, setProcess] = useState(false);
  const [modal, setModal] = useState(false);

  const handleCancel = () => {
    setModal(false);
  };

  const handleCreate = () => {
    setProcess(true);
    setTimeout(() => {
      navigation.navigate("registration");
      setProcess(false);
    }, 2000);
  };

  const emailText = (e) => {
    setEmail(e);
    setErrorEmail(false);
  };

  const passText = (e) => {
    setPassword(e);
    setErrorPassword(false);
  };

  const handleLogin = async () => {
    console.log(email, password);
    if (!email) {
      setErrorEmail(true);
    } else {
      setEmail(false);
    }
    if (!password) {
      setErrorPassword(true);
    } else {
      setPassword(false);
    }
    if (!email || !password) {
      return false;
    }
    setProcess(true);
    try {
      const emailOne = await AsyncStorage.getItem("Email");
      const passOne = await AsyncStorage.getItem("Password");
      console.log("Data", emailOne, passOne);
      if (emailOne == email && passOne == password) {
        console.log("Success");
        navigation.navigate("homescreen");
      } else {
        setModal(true);
      }
    } catch (e) {
      console.log("Error In Login!");
    }
    setEmail("");
    setPassword("");
    setProcess(false);
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-950">
      <View>
        <Image
          source={require("../../assets/images/f.png")}
          className="h-32 w-32"
        ></Image>
      </View>
      <View className="mt-20">
        <View className="items-left">
          <View className="text-white border-2 w-80 h-14 px-2 rounded-2xl bg-gray-800 border-gray-500 flex-row items-center">
            <AntDesign name="user" size={20} color="gray" />
            <TextInput
              className="mx-2 w-60 text-gray-400"
              placeholderTextColor="gray"
              placeholder="Email-id"
              value={email}
              onChangeText={emailText}
            ></TextInput>
          </View>
          {errorEmail ? (
            <Text className="text-red-400 mx-3">email is required!</Text>
          ) : null}
          <View className="text-white border-2 w-80 h-14 px-2 rounded-2xl bg-gray-800 border-gray-500 mt-5 flex-row items-center">
            <Ionicons name="lock-closed-outline" size={20} color="gray" />
            <TextInput
              secureTextEntry={!showPassword}
              className="mx-2 text-gray-400 w-60"
              placeholderTextColor="gray"
              placeholder="Password"
              value={password}
              onChangeText={passText}
            ></TextInput>
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Feather
                name={showPassword ? "eye" : "eye-off"}
                size={24}
                color="gray"
              />
            </Pressable>
          </View>
          {errorPassword ? (
            <Text className="text-red-400 mx-3">password is required!</Text>
          ) : null}
        </View>
        <Pressable
          className="w-80 h-12 rounded-full bg-blue-500 items-center justify-center mt-5"
          onPress={handleLogin}
        >
          <Text className="text-white text-base">
            {process ? "Processing..." : "Log in"}
          </Text>
        </Pressable>
        <View>
          <Pressable className="items-center mt-5">
            <Text className="text-white text-base">Forgot password?</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            className="border-2 border-blue-600 items-center justify-center w-80 h-12 rounded-full mt-40"
            onPress={() => navigation.navigate("registration")}
          >
            <Text className="text-blue-600 text-lg font-bold">
              Create new account
            </Text>
          </Pressable>
        </View>
      </View>
      {modal ? (
        <View className="absolute mt-16 mx-4">
          <View className=" bg-white p-4 rounded-lg">
            <View className="items-center">
              <View className="bg-red-100 rounded-full h-10 w-10 items-center justify-center">
                <AntDesign name="warning" size={24} color="red" />
              </View>
              <View>
                <Text className="font-bold text-red-500 text-lg mt-2 mb-3">
                  Alert!
                </Text>
              </View>
              <View className="items-center mb-1">
                <Text className="text-base text-red-500 font-bold">
                  Wrong Email or password
                </Text>
              </View>
              <View className="bg-gray-300 mb-5 mt-5 w-72 h-0.5 rounded-xl"></View>
              <View>
                <View className="items-center mb-1">
                  <Text className="text-base text-gray-500">
                    Dont't have an account?
                  </Text>
                </View>
                <Pressable
                  className="bg-blue-700 w-72 h-10 rounded-lg items-center justify-center"
                  onPress={handleCreate}
                >
                  <Text className="text-white font-bold">
                    {process ? "Processing..." : "Create new account"}
                  </Text>
                </Pressable>
                <Pressable
                  className="border border-gray-300 mt-3 w-72 h-10 rounded-lg items-center justify-center mb-3"
                  onPress={handleCancel}
                >
                  <Text className="font-bold">cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Login;
