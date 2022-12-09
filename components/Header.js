import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";

const Header = ({ colorScheme, toggleColorScheme }) => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("DevFinder..!");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  return (
    <View className="flex-row justify-between w-full  py-3 px-2 rounded-xl">
      <Text className=" text-2xl font-bold dark:text-light">{text}</Text>
      <View className="flex-row items-center">
        <TouchableOpacity onPress={toggleColorScheme}>
          {colorScheme === "light" ? (
            <Feather name="sun" size={26} color="black" />
          ) : (
            <Feather name="moon" size={24} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
