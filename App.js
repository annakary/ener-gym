import React from 'react';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
=======
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen'; 
import WelcomeScreen from './WelcomeScreen'
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import LayoutDashScreen from './LayoutDashScreen'
import tw from 'twrnc';
>>>>>>> a6556ebe323126bde9917f74d0b9683275a5771e


import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ClassesScreen from './ClassesScreen';
import InfoClassesScreen from './InfoClassesScreen';
import SubscriptionScreen from './SubscriptionScreen';

const Stack = createStackNavigator();

function App() {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ClassesScreen" component={ClassesScreen} />
        <Stack.Screen name="InfoClassesScreen" component={InfoClassesScreen} />
        <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
=======
    <View style={StyleSheet.compose(tw`flex-1 justify-center`, styles.container)}>
      {/* <LoginScreen /> */}
      {/* <WelcomeScreen/> */}
      {/* <HomeScreen/> */}
      {/* <UserScreen/> */}
      < LayoutDashScreen/>
    </View>
>>>>>>> a6556ebe323126bde9917f74d0b9683275a5771e
  );
}

export default App;