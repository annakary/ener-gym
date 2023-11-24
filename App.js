import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ClassesScreen from './ClassesScreen';
import InfoClassesScreen from './InfoClassesScreen';
import SubscriptionScreen from './SubscriptionScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ClassesScreen" component={ClassesScreen} />
        <Stack.Screen name="InfoClassesScreen" component={InfoClassesScreen} />
        <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;