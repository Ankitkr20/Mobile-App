import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import React, { useState } from 'react';
  import * as Yup from 'yup';
  import { Formik } from 'formik';
  import BouncyCheckbox from 'react-native-bouncy-checkbox';
  import { SafeAreaView } from 'react-native-safe-area-context';
  
  const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'Minimum 4 characters')
      .max(16, 'Maximum 16 characters')
      .required('Length is required'),
  });
  
  export default function PasswordChanger() {
    const [password, setPassword] = useState('');
    const [isPassGenerated, setIsPassGenerated] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
  
    const generatePasswordString = (passwordLength: number) => {
      let characterList = '';
  
      const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lower = 'abcdefghijklmnopqrstuvwxyz';
      const digits = '0123456789';
      const special = '!@#$%^&*()_+-=[]{}|;:\'",.<>?/`~';
  
      if (upperCase) characterList += upper;
      if (lowerCase) characterList += lower;
      if (numbers) characterList += digits;
      if (symbols) characterList += special;
  
      if (!characterList) return;
  
      const passwordResult = createPassword(characterList, passwordLength);
      setPassword(passwordResult);
      setIsPassGenerated(true);
    };
  
    const createPassword = (character: string, passwordLength: number) => {
      let result = '';
  
      const pools = [];
      if (upperCase) pools.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      if (lowerCase) pools.push('abcdefghijklmnopqrstuvwxyz');
      if (numbers) pools.push('0123456789');
      if (symbols) pools.push('!@#$%^&*()_+-=[]{}|;:\'",.<>?/`~');
  
      pools.forEach(pool => {
        result += pool.charAt(Math.floor(Math.random() * pool.length));
      });
  
      for (let i = result.length; i < passwordLength; i++) {
        result += character.charAt(Math.floor(Math.random() * character.length));
      }
  
      return result.split('').sort(() => 0.5 - Math.random()).join('');
    };
  
    const resetPasswordState = () => {
      setPassword('');
      setIsPassGenerated(false);
      setLowerCase(false);
      setUpperCase(false);
      setNumbers(false);
      setSymbols(false);
    };
  
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>🔐 Password Generator</Text>
  
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values =>
              generatePasswordString(+values.passwordLength)
            }>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <View style={styles.card}>
                <View style={styles.row}>
                  <Text style={styles.label}>Password Length</Text>
                  <TextInput
                    style={styles.input}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="8"
                    keyboardType="numeric"
                  />
                </View>
  
                {touched.passwordLength && errors.passwordLength && (
                  <Text style={styles.error}>{errors.passwordLength}</Text>
                )}
  
                <Option label="Lowercase" value={lowerCase} set={setLowerCase} />
                <Option label="Uppercase" value={upperCase} set={setUpperCase} />
                <Option label="Numbers" value={numbers} set={setNumbers} />
                <Option label="Symbols" value={symbols} set={setSymbols} />
  
                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={[
                      styles.primaryBtn,
                      !isValid && { opacity: 0.5 },
                    ]}
                    onPress={handleSubmit}>
                    <Text style={styles.primaryBtnTxt}>Generate</Text>
                  </TouchableOpacity>
  
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}>
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
  
          {isPassGenerated && (
            <View style={styles.resultCard}>
              <Text selectable style={styles.generated}>{password}</Text>
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
    );
  }
  
  const Option = ({ label, value, set }: any) => (
    <View style={styles.optionRow}>
      <Text style={styles.label}>{label}</Text>
  
      <View style={styles.line} />
  
      <BouncyCheckbox
        useBuiltInState={false}
        isChecked={value}
        onPress={() => set(!value)}
        fillColor="#29AB87"
      />
    </View>
  );  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 30,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 20,
    },
    card: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 12,
      elevation: 3,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 8,
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      
      line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 10,
      },      
    label: {
      fontSize: 16,
      fontWeight: '500',
    },
    input: {
      width: 70,
      borderWidth: 1,
      borderRadius: 6,
      padding: 6,
      textAlign: 'center',
    },
    error: {
      color: 'red',
      fontSize: 12,
      marginBottom: 10,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    primaryBtn: {
      backgroundColor: '#5DA3FA',
      padding: 12,
      borderRadius: 8,
      width: 120,
      marginHorizontal: 8,
    },
    primaryBtnTxt: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700',
    },
    secondaryBtn: {
      backgroundColor: '#CAD5E2',
      padding: 12,
      borderRadius: 8,
      width: 120,
      marginHorizontal: 8,
    },
    secondaryBtnTxt: {
      textAlign: 'center',
      fontWeight: '600',
    },
    resultCard: {
      backgroundColor: '#000',
      marginTop: 20,
      padding: 16,
      borderRadius: 10,
    },
    generated: {
      color: '#00ff99',
      fontSize: 20,
      textAlign: 'center',
      letterSpacing: 1,
    },
  });
  