import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const Input = ( {givenText, enabled, keyboard} ) => {
   const [text, setText] = useState(givenText);
   console.log({givenText});
   if(keyboard==null) {keyboard = 'default'}
   if(enabled == false) return null;
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               textAlign = "center"
               keyboardType = {keyboard}
               placeholder = {givenText}
               underlineColorAndroid = "transparent"
               placeholder = {givenText}
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               placeholderTextColor = 'grey'
               color = 'black'
               onChangeText = {text => setText(text)}/>
         </View>
      )
}
export default Input

const styles = StyleSheet.create({
   container: {
      //paddingTop: 23
   },
   input: {
      color: 'white',
      margin: 15,
      height: 40,
      borderColor: '#ee6f57',
      borderWidth: 2.5,
      borderRadius: 10
   },
   submitButton: {
      backgroundColor: '#ee6f57',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})