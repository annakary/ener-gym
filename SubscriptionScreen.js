import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const SubscriptionScreen = () => {


  return (
    <View style={tw`flex-1 justify-center items-center bg-[#1C1C1C]`}>
      <Text style={tw`text-white text-center text-5xl font-extrabold bottom-80`}>Subscription</Text>

    </View>
  );
};

export default SubscriptionScreen;