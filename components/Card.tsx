import { Alert, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card(props: any) {
    console.log(props.data);

    function mensaje(mascota: any) {
        Alert.alert("INFORMACIÓN", "El nombre de la mascota es:" + mascota.nombre)
    }

    return (

        <TouchableOpacity onPress={() => mensaje(props.data)}>
            <View style={styles.container}>
                <Text style={styles.txt} > Nombre: {props.data.name}</Text>
                <Text style={styles.txt}>Especie: {props.data.especie}</Text>
                <Text style={styles.txt}>Edad: {props.data.edad}</Text>
            </View>
        </TouchableOpacity >

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'Cyan',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    txt: {
        fontSize: 18,
        color: '#333',
        marginVertical: 4,
    }
})