import { View, Text } from 'react-native'
import { registerRootComponent } from 'expo';
import React, { useEffect } from 'react'
import AppNavigation from './src/navigation';
import { apiCall } from './src/api/openAI';



export default function App() {

  useEffect(() => {
    apiCall('what is the life?');
  }, [])

  return (
    <AppNavigation />
  )
}

// registerRootComponent(App);