import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const Header = ({ colorScheme, toggleColorScheme }) => {
  return (
    <View className="flex-row justify-between w-full  py-3 px-2 rounded-xl">
      <Text className="text-xl font-bold dark:text-light">
        Github Developer Sercher
      </Text>
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
