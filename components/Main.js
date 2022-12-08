import { Image, Linking, Text, View } from "react-native";
import React from "react";
import { Entypo, Octicons } from "@expo/vector-icons";

const Main = (props) => {
  return (
    <View className="px-5 py-8 mt-3 bg-white shadow-xl dark:bg-lightBlue shadow-black rounded-xl ">
      <View className="flex-row items-center ">
        <>
          {!props.data.avatar_url  ? (
            <Image
              className="flex-row w-20 h-20 rounded-full "
              source={require("../assets/user.png")}
            />
          ) : (
            <Image
              className="flex-row w-20 h-20 rounded-full "
              source={{
                uri: props.data.avatar_url,
              }}
            />
          )}
        </>

        <View className="flex-col gap-1 ml-2">
          <Text className="text-xl font-bold dark:text-light">
            {props.data.name ? props.data.name : "The Octobat"}
          </Text>
          <Text
            className="text-primary "
            onPress={() =>
              Linking.openURL(
                props.data.html_url
                  ? props.data.html_url
                  : "http://github.com/chadirabii"
              )
            }
          >
            {props.data.login ? props.data.login : "octobat"}
          </Text>
          <Text className="text-primaryLight">
            Joined{" "}
            {props.data.created_at ? props.data.created_at : "05 Aug 2022"}
          </Text>
        </View>
      </View>
      <Text className="mt-4 dark:text-light ">
        {props.data.bio ? props.data.bio : "This profile has no bio"}
      </Text>

      <View className="flex-row items-center justify-between px-4 py-5 mt-4 bg-light dark:bg-darkBlue rounded-xl ">
        <View className="flex-col items-center gap-3">
          <Text className=" dark:text-light">Repos</Text>
          <Text className="dark:text-light">
            {props.data.public_repos ? props.data.public_repos : "0"}
          </Text>
        </View>
        <View className="flex-col items-center gap-3">
          <Text className="dark:text-light">Followers</Text>
          <Text className="dark:text-light">
            {props.data.followers ? props.data.followers : "0"}
          </Text>
        </View>
        <View className="flex-col items-center gap-3">
          <Text className="dark:text-light">Following</Text>
          <Text className="dark:text-light">
            {props.data.following ? props.data.following : "0"}
          </Text>
        </View>
      </View>
      <View>
        <View className="flex-row items-center justify-start mt-4">
          <Entypo
            name="location-pin"
            size={28}
            color={props.colorScheme === "light" ? "black" : "#fff"}
          />
          <Text className="ml-3 font-light text-base dark:text-light">
            {props.data.location ? props.data.location : "Not available"}
          </Text>
        </View>
        <View className="flex-row items-center justify-start mt-4">
          <Entypo
            name="link"
            size={28}
            color={props.colorScheme === "light" ? "black" : "#fff"}
          />
          <Text className="ml-3 font-light text-base dark:text-light">
            {props.data.blog ? props.data.blog : "Not available"}
          </Text>
        </View>
        <View className="flex-row items-center justify-start mt-4">
          <Entypo
            name="twitter"
            size={28}
            color={props.colorScheme === "light" ? "black" : "#fff"}
          />
          <Text className="ml-3 font-light text-base dark:text-light">
            {props.data.twitter_username
              ? props.data.twitter_username
              : "Not available"}
          </Text>
        </View>
        <View className="flex-row items-center justify-start mt-4">
          <Octicons
            name="organization"
            size={28}
            color={props.colorScheme === "light" ? "black" : "#fff"}
          />
          <Text className="ml-3 font-light text-base dark:text-light">
            {props.data.company ? props.data.company : "Not available"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Main;
