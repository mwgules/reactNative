
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import Counter from './Counter';
import Marslan from './marslan';
import HelloWorldCat from './helloWorldCat';
import JsonRequest from './JsonRequest';
import CustomComponent from './customComponent';
import Shape from './shape';


export default function App() {
  return (
    <View style={styles.container}>

      <Text>Merhaba Dünya!</Text>
      <Shape />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterContainer: {
    marginBottom: 20,  // Counter bileşeni ile Marslan arasına boşluk bırakıyoruz
  },
  marslanContainer: {
    marginTop: 20,  // Marslan bileşenini biraz daha aşağıya yerleştiriyoruz
    width: '80%',  // Marslan bileşeninin genişliğini %80 yapıyoruz
    alignItems: 'center',
  },
});
