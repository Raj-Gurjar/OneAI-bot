
import { View, Text, SafeAreaView, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 flex justify-around bg-white">
            {/* title */}
            <View className="space-y-2">
                <Text style={{ fontSize: wp(10) }} className="text-center font-bold text-gray-700">
                    One AI
                </Text>
                <Text style={{ fontSize: wp(4) }} className="text-center tracking-wider font-semibold text-gray-600">
                    One Stop Solution for all your Queries.
                </Text>
            </View>

            {/* assistant image */}
            <View className="flex-row justify-center">
                <Image
                    source={require('../../assets/images/welcome.png')}
                    style={{ height: wp(75), width: wp(75) }}
                />
            </View>

            {/* start button */}
            <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-emerald-600 mx-5 p-4 rounded-2xl">
                <Text style={{ fontSize: wp(6) }} className="text-center font-bold text-white">
                    Get Started
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    heading: {
        fontSize: wp(10),
        fontWeight: 'bold',
        marginTop: 20,
    },
    sub_heading: {
        fontSize: wp(4),
        // fontWeight: 'bold',
        marginTop: 20,
    },
    logo_box: {

        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        // borderWidth: 2,
    },
})