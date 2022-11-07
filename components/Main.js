import { Image, Linking, Text, View } from "react-native";
import React from "react";
import { Entypo, Octicons } from "@expo/vector-icons";

const Main = ({ colorScheme }) => {
  return (
    <View className="bg-white dark:bg-lightBlue shadow-xl shadow-black mt-3 px-5 py-8 rounded-xl ">
      <View className="flex-row items-center ">
        <Image
          className="w-20 h-20 rounded-full flex-row "
          source={require("../assets/user.png")}
        />
        <View className="flex-col gap-1 ml-2">
          <Text className="text-xl font-bold dark:text-light">Chadi Rabii</Text>
          <Text
            className="text-primary "
            onPress={() => Linking.openURL("https://www.facebook.com/chadi.rabii.3")}
          >
            @chadirabii
          </Text>
          <Text className="text-primaryLight">Joined 14 Nov 2001</Text>
        </View>
      </View>
      <Text className="dark:text-light mt-4 ">This profile have no bio</Text>

      <View className="flex-row bg-light dark:bg-darkBlue items-center justify-between mt-4 px-4 py-5 rounded-xl ">
        <View className="flex-col gap-3 items-center">
          <Text className=" dark:text-light ">Repos</Text>
          <Text className="dark:text-light">0</Text>
        </View>
        <View className="flex-col gap-3 items-center">
          <Text className="dark:text-light">Followers</Text>
          <Text className="dark:text-light">0</Text>
        </View>
        <View className="flex-col gap-3 items-center">
          <Text className="dark:text-light">Following</Text>
          <Text className="dark:text-light">0</Text>
        </View>
      </View>
      <View>
        <View className="flex-row items-center justify-start mt-4">
          <Entypo
            name="location-pin"
            size={28}
            color={colorScheme === "light" ? "black" : "#fff"}
          />
          <Text className="text-l ml-3 font-light dark:text-light">
            Not available
          </Text>
        </View>
        <View className="flex-row items-center justify-start mt-4">
          <Entypo
            name="link"
            size={28}
            color={colorScheme === "light" ? "black" : "#fff"}
          />
          <Text className="text-l ml-3 font-light dark:text-light">
            Not available
          </Text>
        </View>
        <View className="flex-row items-center justify-start mt-4">
          <Entypo
            name="twitter"
            size={28}
            color={colorScheme === "light" ? "black" : "#fff"}
          />
          <Text className="text-l ml-3 font-light dark:text-light">
            Not available
          </Text>
        </View>
        <View className="flex-row items-center justify-start mt-4">
          <Octicons
            name="organization"
            size={28}
            color={colorScheme === "light" ? "black" : "#fff"}
          />
          <Text className="text-l ml-3 font-light dark:text-light">
            Not available
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Main;
