import { View, Text, FlatList, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Data from "../../api/videoData";
import { Entypo } from '@expo/vector-icons';

const VideoReels = () => {

    const navigation = useNavigation();

    const handleVideo = () => {
        navigation.navigate("fbReels");
    }

    return (
        <View>
            <View>
                <View className="flex-row items-center justify-between px-3 mt-3">
                    <View className="flex-row items-center">
                        <Entypo name="video" size={24} color="black" />
                        <Text className="font-bold text-base mx-2">Reels and shorts videos</Text>
                    </View>
                    <View>
                        <Entypo name="dots-three-horizontal" size={24} color="black" />
                    </View>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtraction={(item) => item.id}
                    data={Data}
                    renderItem={({ item }) =>
                        <View className="mt-5 mb-5">
                            <Pressable onPress={handleVideo}>
                                <View className="px-1">
                                    <Image source={item.thumbnailUrl} className="h-96 w-52 rounded-xl"></Image>
                                </View>
                            </Pressable>
                        </View>
                    }
                ></FlatList>
            </View>
        </View>
    )
}

export default VideoReels