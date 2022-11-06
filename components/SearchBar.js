import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        tw`bg-[#1e2a47] px-4 py-2 flex-row mt-3 rounded-lg ml-3 mr-5 `,
      ]}
    >
      <AntDesign name="search1" style={tw`mt-[10]`} size={20} color="#0079ff" />
      <TextInput
        style={tw`bg-[#1e2a47] text-[#f6f8ff] pr-3 rounded-lg mt-[1] ml-3 w-60 h-10 `}
        placeholderTextColor="#f6f8ff"
        placeholder="Search"
      />
      <TouchableOpacity
        style={tw`bg-[#0079ff] px-4 py-1 flex-row items-center rounded-xl `}
      >
        <Text style={tw`text-[#f6f8ff] `}>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
