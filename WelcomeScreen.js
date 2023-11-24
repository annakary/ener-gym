import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const WelcomeScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Agrega la lógica de autenticación aquí
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-900 relative`}>
     <Image style={tw`bottom-20`} source={require('./assets/logo-gym.png')} />
     <Image style={tw`bottom-20 absolute left-6 h-screen top-3`} source={require('./assets/line-gym.png')} />
     <Image style={tw`bottom-20 absolute right-6 h-screen top-3`} source={require('./assets/line-gym.png')} />

      <TouchableOpacity style={tw`bg-emerald-900 p-4 rounded-lg w-75`} onPress={handleLogin}>
        <Text style={tw`text-white text-center text-lg `}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`bg-emerald-900 p-4 rounded-lg w-75 mt-5`} onPress={handleLogin}>
        <Text style={tw`text-white text-center text-lg `}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
