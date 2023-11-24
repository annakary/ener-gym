import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
    <View style={tw`flex-1 justify-center items-center bg-gray-900`}>
      <Text style={tw`text-white text-3xl mb-8`}>Login</Text>
      <TextInput
        style={tw`w-80 h-12 border border-gray-300 rounded mb-4 p-2`}
        placeholder="Email"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={tw`w-80 h-12 border border-gray-300 rounded mb-4 p-2`}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={tw`bg-blue-500 p-4 rounded w-75`} onPress={handleLogin}>
        <Text style={tw`text-white text-center text-lg `}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
