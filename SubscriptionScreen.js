import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const SubscriptionScreen = () => {

  return (
    <View style={tw`flex-1 justify-center items-center bg-[#1C1C1C]`}>
      <ScrollView>
     
        <View style={tw`mt-6 mb-4`}>
          <Text style={tw`text-white text-center text-5xl font-extrabold`}>Subscription</Text>
        </View>

      
        <View style={tw`justify-center items-center mt-6`}>
          <Text style={tw`text-white text-center text-4xl font-bold`}>
            Active
          </Text>
        </View>

         
        <View style={tw`justify-center items-center mt-2`}>
          <View style={tw`overflow-hidden rounded-xl`}>
            <Image
              source={require('./assets/Silver.png')}
              style={tw`w-80 h-40 rounded-xl`}
            />
          </View>
          <Text style={tw`text-white text-center mt-4 text-2xl font-bold`}>
            Silver
          </Text>
          <Text style={tw`text-white text-center mt-2 text-2xl`}>
            Ends: 12/12/2023
          </Text>
          <Text style={tw`text-white text-center mt-2 text-2xl`}>
            Other Subscriptions:
          </Text>
        </View>

        
        <View style={tw`justify-center items-center mt-6`}>
          <View style={tw`overflow-hidden rounded-xl`}>
            <Image
              source={require('./assets/Nova.png')}
              style={tw`w-80 h-40 rounded-xl`}
            />
          </View>
          <Text style={tw`text-white text-center mt-2 text-lg`}>
            Month
          </Text>
        </View>

        
        <View style={tw`justify-center items-center mt-6`}>
          <View style={tw`overflow-hidden rounded-xl`}>
            <Image
              source={require('./assets/Global.png')}
              style={tw`w-80 h-40 rounded-xl`}
            />
          </View>
          <Text style={tw`text-white text-center mt-2 text-lg`}>
            Year
          </Text>
        </View>

        
      </ScrollView>
    </View>
  );
};

export default SubscriptionScreen;