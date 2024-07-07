import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function MascotaScreen() {
    return (
        <View>
            {/*------------------ GUARDAR -------------------------- */}
            <View style={styles.guardar}>
                <Text style={styles.tiulos}>GUARDAR</Text>
                <TextInput
                    placeholder='Ingresar id'
                    style={styles.txt}
                />
                <TextInput
                    placeholder='Ingresar nombre'
                    style={styles.txt}

                />
                <TextInput
                    placeholder='Ingresar especie'
                    style={styles.txt}
                />
                <TextInput
                    placeholder='Ingresar edad'
                    style={styles.txt}

                />
                <Button title='Guardar' />
            </View>

            <View style={styles.separador} />

            {/*------------------ EDITAR-------------------------- */}
            <View style={styles.editar}>
                <Text style={styles.tiulos}>EDITAR</Text>
                <View style={styles.fila}>
                    <TextInput
                        placeholder='Ingresar id'
                        style={{width:'25%', backgroundColor:'#6666', borderRadius:10}}
                    />
                    <Button title='buscar' color={'#299979'} />
                </View>
                <TextInput
                    placeholder='Ingresar nombre'
                    style={styles.txt}

                />
                <TextInput
                    placeholder='Ingresar especie'
                    style={styles.txt}

                />
                <TextInput
                    placeholder='Ingresar edad'
                    style={styles.txt}

                />
                <Button title='Guardar' color={'green'} />
            </View>

            <View style={styles.separador} />

            {/*------------------ ELIMINAR------------------------- */}
            <View style={styles.eliminar}>
                <Text style={styles.tiulos}>ELIMINAR</Text>
                <TextInput
                    placeholder='Ingresar id'
                    style={styles.txt}

                />

                <Button title='ELIMINAR' color={'red'} />
            </View>

            <View style={styles.separador} />

        </View>
    )
}

const styles = StyleSheet.create({
    separador: {
        borderWidth: 1,
        width: '90%',
        alignItems:'center'
    },
    tiulos: {
        fontSize: 25
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    guardar: {
        backgroundColor: '#a1c5f7',
        justifyContent: 'center',
        borderRadius: 30,
        alignItems:'center'
    },
    editar: {
        backgroundColor: '#b5f7a1',
        justifyContent: 'center',
        borderRadius: 30,
        alignItems:'center'
    },
    eliminar: {
        backgroundColor: '#f7a1a1',
        justifyContent: 'center',
        borderRadius: 30,
        alignItems:'center'
    },
    txt: {
        width: '70%',
        backgroundColor: '#6666',
        height: 35,
        borderRadius: 10,
        margin:1
    }
    
})