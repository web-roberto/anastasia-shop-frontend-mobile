import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, LogBox, SafeAreaView } from 'react-native';
import './ignoreWarnings';

//Screens
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './Shared/Header';
LogBox.ignoreAllLogs(true);
export default function App() {
  //<Header /> quitamos la imagen antes del ProductContainer y ponemos un texto

  return (
    <SafeAreaView style={styles.container}>
      <ProductContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
