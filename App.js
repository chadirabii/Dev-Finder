import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View>
        <SearchBar />
      </View>
      <View>
        <Main />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141d2f",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
