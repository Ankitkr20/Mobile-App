import React from "react";
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ScrollView
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";

function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
