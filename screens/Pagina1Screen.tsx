import { Button, StyleSheet, Text, TextInput, View, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';

// FIREBASE
import { set, ref } from "firebase/database";
import { db } from '../config/Config'; // Asegúrate de que la ruta de importación de db sea correcta

export default function RegistroMascotasScreen() {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [especie, setEspecie] = useState('');
    const [edad, setEdad] = useState('');
    const [propietario, setPropietario] = useState('');

    // Función para guardar los datos de la mascota
    function guardarMascota() {
        if (!id || !nombre || !especie || !edad || !propietario) {
            Alert.alert('Error', 'Por favor complete todos los campos');
            return;
        }

        set(ref(db, 'mascotas/' + id), {
            nombre: nombre,
            especie: especie,
            edad: edad,
            propietario: propietario,
        })
        .then(() => {
            Alert.alert('Éxito', 'La mascota se ha registrado correctamente');
            limpiarCampos();
        })
        .catch((error) => {
            Alert.alert('Error', `No se pudo registrar la mascota: ${error.message}`);
        });
    }

    // Función para limpiar los campos después de registrar
    function limpiarCampos() {
        setId('');
        setNombre('');
        setEspecie('');
        setEdad('');
        setPropietario('');
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Registro de Mascotas</Text>
            <TextInput
                placeholder="Ingrese ID de la mascota"
                style={styles.input}
                onChangeText={(texto) => setId(texto)}
                value={id}
            />
            <TextInput
                placeholder="Ingrese nombre de la mascota"
                style={styles.input}
                onChangeText={(texto) => setNombre(texto)}
                value={nombre}
            />
            <TextInput
                placeholder="Ingrese especie de la mascota (ej: perro, gato)"
                style={styles.input}
                onChangeText={(texto) => setEspecie(texto)}
                value={especie}
            />
            <TextInput
                placeholder="Ingrese edad de la mascota (en años)"
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(texto) => setEdad(texto)}
                value={edad}
            />
            <TextInput
                placeholder="Ingrese nombre del propietario"
                style={styles.input}
                onChangeText={(texto) => setPropietario(texto)}
                value={propietario}
            />
            <Button title="Guardar" onPress={guardarMascota} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        fontSize: 18,
        backgroundColor: '#ffffff',
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
    },
});
