import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen'; 
import WelcomeScreen from './WelcomeScreen';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={StyleSheet.compose(tw`flex-1 justify-center`, styles.container)}>
      {/* <LoginScreen /> */}
      <WelcomeScreen/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',

  },
});