// import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  TextInput,
  StyleSheet,
} from 'react-native';
// import Voice from '@react-native-community/voice';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { apiCall } from '../api/openAI';
import Features from '../components/features';
import { dummyMessages } from '../constants';
// import Tts from 'react-native-tts';
// import { ... } from 'expo';
// import * as Permissions from 'expo-permissions';
import FontIcon from 'react-native-vector-icons/FontAwesome';


export default function HomeScreen() {

  const [messages, setMessages] = useState(dummyMessages);
  const [result, setResult] = useState('');
  const [typedText, setTypedText] = useState(''); // State to store typed text

  const handleTextSubmit = () => {
    // Create a new message object and add it to the messages state
    if (typedText.trim() !== '') {
      const newMessage = {
        role: 'user', // Assuming the role is 'user' for user input
        content: typedText,
      };
      setMessages([...messages, newMessage]);
      setTypedText('');
    }
  };

  console.log('messages', messages);
  

  return (
    <View className="flex-1 bg-white">
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView className="flex-1 flex mx-5">
        {/* bot icon */}
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/images/bot.png')}
            style={{ height: hp(15), width: hp(15) }}
          />
        </View>


        {/* //!  features || message history  */}
        {
          messages.length > 0 ? (
            <View className="space-y-2 flex-1">
              <Text className="text-gray-700 font-semibold ml-1" style={{ fontSize: wp(5) }}>Assistant</Text>

              <View
                style={{ height: hp(58) }}
                className="bg-neutral-200 rounded-3xl p-4">
                <ScrollView
                  // ref={scrollViewRef} 
                  bounces={false}
                  className="space-y-4"
                  showsVerticalScrollIndicator={false}
                >
                  {
                    messages.map((message, index) => {
                      if (message.role == 'assistant') {
                        if (message.content.includes('https')) {
                          // result is an ai image
                          return (
                            <View key={index} className="flex-row justify-start">
                              <View
                                className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                                <Image
                                  source={{ uri: message.content }}
                                  className="rounded-2xl"
                                  resizeMode="contain"
                                  style={{ height: wp(60), width: wp(60) }}
                                />
                              </View>
                            </View>


                          )
                        } else {
                          // chat gpt response
                          return (
                            <View
                              key={index} style={{ width: wp(70) }}
                              className="bg-emerald-100 p-2 rounded-xl rounded-tl-none">
                              <Text className="text-neutral-800" style={{ fontSize: wp(4) }}  >
                                {message.content}
                              </Text>
                            </View>
                          )
                        }
                      } else {
                        // user input text
                        return (
                          <View key={index} className="flex-row justify-end">
                            <View
                              style={{ width: wp(70) }}
                              className="bg-white p-2 rounded-xl rounded-tr-none">
                              <Text style={{ fontSize: wp(4) }}  >
                                {message.content}
                              </Text>
                            </View>
                          </View>
                        );
                      }


                    })
                  }
                </ScrollView>
              </View>
            </View>
          ) : (
            <Features />
          )
        }


        {/* //!  input box  */}

        <View style={styles.container}>
          <TextInput
            placeholder="Start typing..."
            style={styles.textInput}
            value={typedText}
            onChangeText={text => setTypedText(text)}
            onSubmitEditing={handleTextSubmit} // This will be called when the user presses Enter/Submit
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleTextSubmit} // This will also submit the typed text
          >
            {/* <Text style={styles.submitButtonText}>Submit</Text> */}
            <FontIcon name="send" size={20} color="white" />
          </TouchableOpacity>

        </View>


      </SafeAreaView>



    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    // alignItems: 'space-between',
    // backgroundColor: 'red',
    marginBottom: 20,
    padding: 10,
    position:'relative'
  },
  textInput: {
    height: 50,
    width: '83%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#b4afaf',
  },

  submitButton: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: -40,
    // backgroundColor: '#59a749',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});