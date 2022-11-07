import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  

  return (
    <View className="bg-light dark:bg-darkBlue" style={styles.container}>
      <Header colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
      <SearchBar colorScheme={colorScheme}  />
      <Main colorScheme={colorScheme} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
