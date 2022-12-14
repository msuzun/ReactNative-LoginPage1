import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import SignInScreen from './src/screens/SignInScreen/SignInScreen'

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#F9FBFC',
  }
})