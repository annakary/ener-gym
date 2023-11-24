import React, { useState } from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const UserScreen = () => {

  
  return (
    <View style={tw`flex-1 justify-center items-center bg-[#1C1C1C]`}>
      <Text style={tw`text-white text-center text-5xl font-extrabold bottom-20`}>User Info</Text>
      <Image style={tw`bottom-11`} source={require('./assets/user-gym.png')} />
      <Image style={tw`bottom-20 absolute right--50 h-screen top-3`} source={require('./assets/line-user-gym.png')} />

      <Text style={tw`text-white text-center text-3xl font-extrabold bottom-1`}>Eduardo {"\n"} Marges</Text>
    
     <View style={tw` bg-emerald-900 w-3/4  pt-7 h-96 top-17 relative rounded-[15px]`}>

     <Text style={tw`text-white text-center text-3xl font-extrabold `}>Asistance</Text>
     <Image style={tw`ml-4 top-24 absolute`} source={require('./assets/check.png')} />
     <Text style={tw`pl-10 text-white text-start text-2xl font-extrabold mt-5`}>Zumba : 11/1023</Text>
     </View>
      
    </View>
  );
};

export default UserScreen;
