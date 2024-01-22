import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Login";
import Registration from "../Registration";
import Header from "../Header";
import HomeScreen from "../HomeScreen";
import FaceBookReels from "../FaceBookReels";
import PeopleKnow from "../PeopleKnow";
import Market from "../Market";
import ProductDetails from "../ProductDetails";
import Menu from "../Menu";
import ProfileEdit from "../editComponents/ProfileEdit";
import EditName from "../editComponents/EditName";
import EditEmail from "../editComponents/EditEmail";
import EditPass from "../editComponents/EditPass";
import EditPhone from "../editComponents/EditPhone";
import AllCategory from "../category/AllCategory";
import MixCategory from "../category/MixCategory";
import BabyProduct from "../category/BabyProduct";
import BookItems from "../category/BookItems";
import TopMovie from "../category/TopMovie";
import ElectronicItem from "../category/ElectronicItem";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="homescreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="header"
        component={Header}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="registration"
        component={Registration}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="fbReels"
        component={FaceBookReels}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="peopleknow"
        component={PeopleKnow}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="market"
        component={Market}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="productDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="menu"
        component={Menu}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="profileedit"
        component={ProfileEdit}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="editname"
        component={EditName}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="editemail"
        component={EditEmail}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="editpass"
        component={EditPass}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="editphone"
        component={EditPhone}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="allcategory"
        component={AllCategory}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="mixcategory"
        component={MixCategory}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="babyproduct"
        component={BabyProduct}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="bookitems"
        component={BookItems}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="topmovie"
        component={TopMovie}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="electronicitem"
        component={ElectronicItem}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNav;
