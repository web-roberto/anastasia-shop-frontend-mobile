import React from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require('../assets/Logo.png')}
        resizeMode="contain"
        style={{ height: 50, width:"100%" }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 0,
  },
});

export default Header;
