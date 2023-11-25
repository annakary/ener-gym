import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const ClassesScreen = () => {
    const navigation = useNavigation();

    const openSidebar = () => {
        navigation.navigate('ClassesScreen');
    };

    const handleLogout = () => {
    };

    const navigateToInfoClasses = () => {
        navigation.navigate('InfoClassesScreen');
    };

    return (
        <View style={tw`flex-1 justify-center items-center bg-[#1C1C1C]`}>
            <Text style={tw`text-white text-center text-5xl font-extrabold bottom-80`}>Classes</Text>
            <ScrollView>
                <View style={tw`bg-[#1C1C1C] justify-center items-center`}>
                    <View style={tw`flex flex-row items-center p-4`}>
                        <View style={tw`flex items-center ml-4`}>
                            <Text style={tw`text-white text-center text-5xl font-extrabold`}>
                                Classes
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Imagen 1: zumba */}
                <TouchableOpacity onPress={navigateToInfoClasses} style={tw`justify-center items-center mt-6`}>
                    <View style={tw`overflow-hidden rounded-xl`}>
                        <Image
                            source={require('./assets/Zumba.png')}
                            style={tw`w-80 h-40 rounded-xl`}
                        />
                    </View>
                    <Text style={tw`text-white text-center mt-2 text-lg`}>
                        Zumba
                    </Text>
                </TouchableOpacity>

                {/* Imagen 2: yoga */}
                <View style={tw`justify-center items-center mt-6`}>
                    <TouchableOpacity style={tw`overflow-hidden rounded-xl`}>
                        <Image
                            source={require('./assets/Yoga.png')}
                            style={tw`w-80 h-40 rounded-xl`}
                        />
                    </TouchableOpacity>
                    <Text style={tw`text-white text-center mt-2 text-lg`}>
                        Yoga
                    </Text>
                </View>

                {/* Imagen 3: spinning */}
                <View style={tw`justify-center items-center mt-6`}>
                    <TouchableOpacity style={tw`overflow-hidden rounded-xl`}>
                        <Image
                            source={require('./assets/Spinning.png')}
                            style={tw`w-80 h-40 rounded-xl`}
                        />
                    </TouchableOpacity>
                    <Text style={tw`text-white text-center mt-2 text-lg`}>
                        Spinning
                    </Text>
                </View>

                {/* Imagen 4: boxeo */}
                <View style={tw`justify-center items-center mt-6`}>
                    <TouchableOpacity style={tw`overflow-hidden rounded-xl`}>
                        <Image
                            source={require('./assets/Boxeo.png')}
                            style={tw`w-80 h-40 rounded-xl`}
                        />
                    </TouchableOpacity>
                    <Text style={tw`text-white text-center mt-2 text-lg`}>
                        Boxeo
                    </Text>
                </View>

                {/* Imagen 5: Baile */}
                <View style={tw`justify-center items-center mt-6`}>
                    <TouchableOpacity style={tw`overflow-hidden rounded-xl`}>
                        <Image
                            source={require('./assets/Baile.png')}
                            style={tw`w-80 h-40 rounded-xl`}
                        />
                    </TouchableOpacity>
                    <Text style={tw`text-white text-center mt-2 text-lg`}>
                        Baile
                    </Text>
                </View>

            </ScrollView>
        </View>
    );
};

export default ClassesScreen;