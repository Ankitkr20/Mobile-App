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
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";
import PasswordChanger from "./components/PasswordChanger";
import BgChanger from "./components/BgChanger";

function App() {
  const isDarkMode = useColorScheme() === "dark";
  

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
        <PasswordChanger/>
        <BgChanger/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
