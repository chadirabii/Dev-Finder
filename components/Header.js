import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const Header = () => {
  return (
    <View style={tw`bg-[#141d2f] mt-5 w-full  `}>

      <Text style={tw`text-xl ml-3 font-bold text-[#f6f8ff]`}>
        Github Developer Sercher
      </Text>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
