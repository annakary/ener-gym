import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const InfoClassesScreen = () => {
  return (
    <View style={tw`flex-1 bg-[#1C1C1C]`}>

      <View style={tw`bg-[#1C1C1C]`} />


      <ScrollView>

        <View style={tw`bg-[#1C1C1C] justify-center items-center`}>

          <View style={{ width: 425, height: 300 }}>
            <Image
              source={require('./assets/Zumba.png')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>


          <View style={tw`bg-white h-1`} />


          <View style={tw`p-4`}>
            <Text style={tw`text-white text-3xl font-bold mb-2`}>Instructor: John Doe</Text>
            <Text style={tw`text-white text-3xl mb-2`}>Data: November 30, 2023</Text>
            <Text style={tw`text-white text-3xl mb-2`}>Schedule: 10:00 AM - 12:00 PM</Text>
          </View>


          <TouchableOpacity
            style={tw`bg-green-500 p-4 rounded-md`}
          >
            <Text style={tw`text-white text-lg font-bold`}>Inscribirse</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </View>
  );
};

export default InfoClassesScreen;