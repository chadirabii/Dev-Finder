import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

// const getUsers = () => {
//   return fetch("https://api.github.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

const SearchBar = ({ colorScheme }) => {
  return (
    <View className="bg-white dark:bg-lightBlue shadow-xl shadow-black flex-row rounded-xl items-center justify-between px-4 py-2 mt-3 ">
      <View className="flex-row items-center">
        <AntDesign className="mt-1 " name="search1" size={20} color="#0079ff" />
        <TextInput
          className=" text-light pr-3 ml-3 w-60 h-10 "
          placeholderTextColor={colorScheme === "light" ? "#000" : "#fff"}
          placeholder="Search"
        />
      </View>
      <TouchableOpacity className="bg-primary px-4 py-2 rounded-xl ">
        <Text className="text-light ">Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
