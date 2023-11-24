import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Agrega la lógica de autenticación aquí
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-[#1C1C1C] relative`}>
           <Image style={tw`bottom-25`} source={require('./assets/logo-login-gym.png')} />
           <Image style={tw` absolute right--25 h-screen top--20`} source={require('./assets/bg-image-line-gym.png')} />

      <TextInput
        style={tw`w-80 h-12 border border-gray-300 rounded mb-4 p-2 text-white`}
        placeholder="Email"
        placeholderTextColor="white"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={tw`w-80 h-12 border border-gray-300 rounded mb-4 p-2`}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={tw`bg-emerald-900 p-4 rounded-lg w-75`} onPress={handleLogin}>
        <Text style={tw`text-white text-center text-xl font-extrabold `}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
