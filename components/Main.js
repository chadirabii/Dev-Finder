import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, Octicons } from "@expo/vector-icons";

const Main = (props) => {
  return (
    <props.DismissKeyboard>
      <View className="px-5 py-8 mt-3 bg-white shadow-xl dark:bg-lightBlue shadow-black rounded-xl ">
        <View className="flex-row items-center ">
          <>
            {!props.data.avatar_url ? (
              <Image
                className="flex-row w-20 h-20 rounded-full"
                source={require("../assets/user.gif")}
              />
            ) : (
              <TouchableOpacity
                onPress={() => Linking.openURL(props.data.html_url)}
              >
                <Image
                  className="flex-row w-20 h-20 rounded-full "
                  source={{
                    uri: props.data.avatar_url,
                  }}
                />
              </TouchableOpacity>
            )}
          </>

          <View className="flex-col gap-1 ml-2">
            <Text className="text-xl font-bold dark:text-light">
              {props.data.name ? props.data.name : "The Octobat"}
            </Text>
            <Text
              disabled={!props.data.html_url}
              className="text-primary "
              onPress={() => Linking.openURL(props.data.html_url)}
            >
              {props.data.login ? "@" + props.data.login : "@octobat"}
            </Text>
            <Text className="text-primaryLight">
              Joined{" "}
              {props.data.created_at
                ? props.data.created_at.slice(0, 10)
                : "2022-11-14"}
            </Text>
          </View>
        </View>
        <Text className="mt-4 dark:text-light ">
          {props.data.bio ? props.data.bio : "This profile have no bio"}
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
            <Text
              disabled={!props.data.location}
              onPress={() =>
                Linking.openURL(
                  `https://www.google.com/maps/place/${props.data.location}`
                )
              }
              className="ml-3 font-light text-base dark:text-light"
            >
              {props.data.location ? props.data.location : "Not available"}
            </Text>
          </View>
          <View className="flex-row items-center justify-start mt-4">
            <Entypo
              name="link"
              size={28}
              color={props.colorScheme === "light" ? "black" : "#fff"}
            />
            <Text
              disabled={!props.data.blog}
              onPress={() => Linking.openURL(props.data.blog)}
              className="ml-3 font-light text-base dark:text-light"
            >
              {props.data.blog ? props.data.blog : "Not available"}
            </Text>
          </View>
          <View className="flex-row items-center justify-start mt-4">
            <Entypo
              name="twitter"
              size={28}
              color={props.colorScheme === "light" ? "black" : "#fff"}
            />
            <Text
              disabled={!props.data.twitter_username}
              onPress={() =>
                Linking.openURL(
                  `https://twitter.com/${props.data.twitter_username}`
                )
              }
              className="ml-3 font-light text-base dark:text-light"
            >
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
            <Text
              disabled={!props.data.company}
              onPress={() =>
                Linking.openURL(
                  `https://www.google.com/search?q=${props.data.company}`
                )
              }
              className="ml-3 font-light text-base dark:text-light"
            >
              {props.data.company ? props.data.company : "Not available"}
            </Text>
          </View>
        </View>
      </View>
    </props.DismissKeyboard>
  );
};

export default Main;
