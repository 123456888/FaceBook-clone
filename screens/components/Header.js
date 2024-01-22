import { View, Text, Image } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View>
            <View className="flex-row items-center justify-between">
                <View>
                    <Image source={require("../../assets/images/facebook.png")} className="h-10 w-44"></Image>
                </View>
                <View className="flex-row items-center mx-2">
                    <View className="border border-slate-300 rounded-full bg-slate-300">
                        <Image source={require("../../assets/images/add.png")} className="h-8 w-8"></Image>
                    </View>
                    <View className="border border-slate-300 rounded-full bg-slate-300 p-1 ml-2">
                        <Image source={require("../../assets/images/search.png")} className="h-6 w-6"></Image>
                    </View>
                    <View className="border border-slate-300 rounded-full bg-slate-300 p-1 ml-2">
                        <Image source={require("../../assets/images/message.png")} className="h-6 w-6"></Image>
                    </View> 
                </View>
            </View>
        </View>
    )
}

export default Header