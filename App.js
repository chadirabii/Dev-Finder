import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [user, setUser] = useState("");
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        setData(response.data);
        console.log();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View className="bg-light dark:bg-darkBlue" style={styles.container}>
      <Header colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
      <SearchBar
        user={user}
        getData={getData}
        setUser={setUser}
        colorScheme={colorScheme}
      />
      <Main data={data} colorScheme={colorScheme} />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
});
