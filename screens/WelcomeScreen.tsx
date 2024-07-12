import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../config/Config';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function WelcomeScreen() {

  

  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})