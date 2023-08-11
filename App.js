import { View, Text } from 'react-native'
import { registerRootComponent } from 'expo';
import React from 'react'
import AppNavigation from './src/navigation';



export default function App() {
  return (
    <AppNavigation />
  )
}

registerRootComponent(App);