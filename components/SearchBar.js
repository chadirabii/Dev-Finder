import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ colorScheme, setUser, getData, user }) => {
  return (
    <View
      className="flex-row  items-center justify-between px-3 py-2 mt-3 
     bg-white shadow-xl dark:bg-lightBlue shadow-black rounded-xl max-w-lg "
    >
      <View className="flex-row items-center">
        <AntDesign className="mt-1 " name="search1" size={20} color="#0079ff" />
        <TextInput
          onChangeText={setUser}
          className="h-10  ml-3 dark:text-light w-48 "
          placeholderTextColor={colorScheme === "light" ? "#000" : "#fff"}
          placeholder="Search"
          onSubmitEditing={(Keyboard.dismiss, setUser)}
        />
      </View>
      <TouchableOpacity
        disabled={user === "" ? true : false}
        onPress={(getData, Keyboard.dismiss)}
        className="px-4 py-2 bg-primary rounded-xl "
      >
        <Text className="text-light ">Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
