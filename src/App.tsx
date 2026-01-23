import React from "react";
import { useColorScheme, FlatList } from "react-native";
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
import TicTacToe from "../components/TicTacToe";

const COMPONENTS = [
  FlatCards,
  ElevatedCards,
  FancyCard,
  ActionCard,
  ContactList,
  PasswordChanger,
  BgChanger,
  RollTheDice,
  CurrencyConverter,
  TicTacToe,
];

function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={COMPONENTS}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item: Component }) => <Component />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
