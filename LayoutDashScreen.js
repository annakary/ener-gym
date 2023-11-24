import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const LayoutDashScreen = () => {


  return (
    <View style={tw`flex-1 justify-center items-center bg-[#1C1C1C] relative`}>
      <View style={tw`w-1/2  left-0 h-full bg-emerald-900 absolute`}>
        <Image style={tw`top-20 left-12`} source={require('./assets/user-gym.png')} />
        <Text style={tw`text-white text-center text-2xl font-extrabold top-25`}>Username</Text>
        <Image style={tw`top-28 left-12`} source={require('./assets/lines-user-layout.png')} />
        <Text style={tw`text-white text-center text-2xl font-extrabold top-25 mt-10`}>Subscription</Text>
        <Text style={tw`text-white text-center text-2xl font-extrabold top-25 mt-20`}>Classes</Text>
        <Text style={tw`text-white text-center text-2xl font-extrabold top-25 mt-20`}>User info</Text>

      </View>
    </View>
  );
};

export default LayoutDashScreen;