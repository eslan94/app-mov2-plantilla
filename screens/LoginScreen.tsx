import { Button, StyleSheet, Text, View, TextInput, Alert} from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';


export default function LoginScreen({ navigation }: any) {

  const [correo, setCorreo] = useState('')
  const [contrasenia, setContrasenia] = useState('')

  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate("Drawer")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        let titulo='';
        let mensaje='';

        switch (errorCode) {
          case 'auth/invalid-email':
            titulo = "Correo inválido";
            mensaje = "El correo ingresado no es válido";
            break;
          case 'auth/user-not-found':
            titulo = "Usuario no encontrado";
            mensaje = "El usuario no existe";
            break;
          case 'auth/invalid-credential':
            titulo = "Contraseña incorrecta";
            mensaje = "La contraseña ingresada no es válida";
            break;
          case 'auth/missing-password':
            titulo = "Ingrese la contraseña";
            mensaje = "Todos los campos son obligatorios";
            break;
          default:
            titulo = "Error desconocido";
            mensaje = "Ha ocurrido un error inesperado";
            break;
        }
        console.log(errorCode)

        Alert.alert(titulo, mensaje)
      });
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Login</Text>

      <TextInput
        placeholder='Ingresa tu correo electrónico'
        onChangeText={(texto) => (setCorreo(texto))}
        keyboardType='email-address'
      />
      <TextInput
        placeholder='Ingresa contraseña'
        onChangeText={(texto) => (setContrasenia(texto))}
      />

      <Button title='Ingresar' onPress={() => login()} />

      <Text onPress={() => navigation.navigate('Registro')}> 👉 Regístrate aquí 👈</Text>
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