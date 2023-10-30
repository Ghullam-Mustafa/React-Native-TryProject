import { Button, StatusBar, StyleSheet, Text, View,   } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const App = () => {
 
  return (
    <View style={{flex:1, backgroundColor:"lightgreen",display:"flex", justifyContent:"center",alignItems:"center"}}>
      <StatusBar barStyle={backgroundColor="yellow"}/>
      <Text style={{color:"white", fontSize:50}}>App Dveloper.?</Text>

    </View>

    
  )

}

export default App

const styles = StyleSheet.create({})