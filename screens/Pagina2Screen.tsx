import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

// FIREBASE
import { db } from '../config/Config';
import { onValue, ref } from 'firebase/database';

export default function MascotasScreen() {
    const [mascotas, setMascotas] = useState([]);

    // Leer los datos de Firebase
    useEffect(() => {
        function leer() {
            const mascotaRef = ref(db, 'mascotas/');
            onValue(mascotaRef, (snapshot) => {
                const data = snapshot.val();
                
                // Convertir los datos a un formato que podamos usar
                let arregloTemp : any = Object.keys(data).map( id =>({
                  id, ...data[id]
                }));
                setMascotas(arregloTemp)
                
            });
        }
        leer();
    }, []);

    // Tipo para las mascotas
    type Mascota = {
        id: string;
        nombre: string;
        especie: string;
        edad: string;
        propietario: string;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Mascotas</Text>
            <FlatList
                data={mascotas}
                renderItem={({ item }: { item: Mascota }) => (
                    <View style={styles.mascotaContainer}>
                        <Text style={styles.mascotaText}>ID: {item.id}</Text>
                        <Text style={styles.mascotaText}>Nombre: {item.nombre}</Text>
                        <Text style={styles.mascotaText}>Especie: {item.especie}</Text>
                        <Text style={styles.mascotaText}>Edad: {item.edad} años</Text>
                        <Text style={styles.mascotaText}>Propietario: {item.propietario}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4CAF50',
        textAlign: 'center',
    },
    mascotaContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    mascotaText: {
        fontSize: 18,
        marginBottom: 5,
    },
});
