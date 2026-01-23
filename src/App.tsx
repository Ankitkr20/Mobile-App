import React from "react";
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ScrollView
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FlatCards from "../components/FlatCards";
import ElevatedCards from "../components/ElevatedCards";
import FancyCard from "../components/FancyCard";
import ActionCard from "../components/ActionCard";
import ContactList from "../components/ContactList";
import PasswordChanger from "../components/PasswordChanger";
import BgChanger from "../components/BgChanger";
import RollTheDice from "../components/RollTheDice";
import CurrencyConverter from "../components/CurrencyConverter";

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
        <RollTheDice/>
        <CurrencyConverter/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
