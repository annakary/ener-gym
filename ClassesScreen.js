import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const ClassesScreen = () => {


  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-900`}>
      <Text style={tw`text-white text-center text-5xl font-extrabold bottom-80`}>Classes</Text>

    </View>
  );
};

export default ClassesScreen;
