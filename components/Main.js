import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const Main = () => {
  return (
    <View style={tw `mt-3`}>
      <Text style={tw`text-xl ml-3  text-[#f6f8ff]`}>Main</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
