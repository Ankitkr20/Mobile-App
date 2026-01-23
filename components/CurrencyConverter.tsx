import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    FlatList,
    Pressable,
  } from 'react-native';
  import React, { useState } from 'react';
  
  import { currencyByRupee } from '../src/constants';
  import CurrencyButton from './CurrencyButton';
  import Snackbar from 'react-native-snackbar';
  import { SafeAreaView } from 'react-native-safe-area-context';
  
  export default function CurrencyConverter() {
    const [inputValue, setInputValue] = useState('');
    const [resultValue, setResultValue] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('');
  
    const buttonPressed = (targetValue: Currency) => {
      if (!inputValue) {
        return Snackbar.show({
          text: 'Enter an amount first',
          backgroundColor: '#EA7773',
          textColor: '#000',
        });
      }
  
      const inputAmount = parseFloat(inputValue);
  
      if (isNaN(inputAmount)) {
        return Snackbar.show({
          text: 'Please enter a valid number',
          backgroundColor: '#F4BE2C',
          textColor: '#000',
        });
      }
  
      const convertedValue = inputAmount * targetValue.value;
      setResultValue(`${targetValue.symbol} ${convertedValue.toFixed(2)} 💵`);
      setTargetCurrency(targetValue.name);
    };
  
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          {/* Top Section */}
          <View style={styles.topCard}>
            <Text style={styles.heading}>Currency Converter</Text>
  
            <View style={styles.inputRow}>
              <Text style={styles.rupee}>₹</Text>
              <TextInput
                style={styles.inputAmountField}
                maxLength={14}
                value={inputValue}
                clearButtonMode="always"
                onChangeText={setInputValue}
                keyboardType="number-pad"
                placeholder="Enter amount in INR"
                placeholderTextColor="#999"
              />
            </View>
  
            {resultValue !== '' && (
              <View style={styles.resultCard}>
                <Text style={styles.resultTxt}>{resultValue}</Text>
              </View>
            )}
          </View>
  
          {/* Bottom Section */}
          <View style={styles.bottomContainer}>
            <FlatList
              numColumns={3}
              data={currencyByRupee}
              keyExtractor={item => item.name}
              contentContainerStyle={styles.list}
              renderItem={({ item }) => (
                <Pressable
                  style={[
                    styles.button,
                    targetCurrency === item.name && styles.selected,
                  ]}
                  onPress={() => buttonPressed(item)}
                >
                  <CurrencyButton {...item} />
                </Pressable>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: '#2f3640',
    },
    container: {
      flex: 1,
    },
  
    /* Top */
    topCard: {
      margin: 16,
      padding: 20,
      borderRadius: 16,
      backgroundColor: '#f5f6fa',
      elevation: 4,
    },
    heading: {
      fontSize: 24,
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: 16,
      color: '#2d3436',
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    rupee: {
      fontSize: 28,
      fontWeight: '800',
      marginRight: 8,
      color: '#2d3436',
    },
    inputAmountField: {
      flex: 1,
      height: 48,
      paddingHorizontal: 12,
      borderRadius: 8,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#dcdde1',
      fontSize: 16,
      color: '#000',
    },
    resultCard: {
      marginTop: 12,
      padding: 12,
      borderRadius: 10,
      backgroundColor: '#dff9fb',
    },
    resultTxt: {
      fontSize: 18,
      fontWeight: '800',
      textAlign: 'center',
      color: '#130f40',
    },
  
    /* Bottom */
    bottomContainer: {
      flex: 1,
    },
    list: {
      paddingHorizontal: 8,
    },
    button: {
      flex: 1,
      margin: 10,
      height: 70,
      borderRadius: 14,
      backgroundColor: '#ffffff',
      elevation: 3,
      justifyContent: 'center',
    },
    selected: {
      backgroundColor: '#ffeaa7',
      transform: [{ scale: 1.03 }],
    },
  });
  