import { FlatList, StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { db } from '../config/Config';
import { onValue, ref } from 'firebase/database';
import Informacion from '../components/Informacion';  // Importamos el componente de información

export default function MascotasScreen() {
  const [mascotas, setMascotas] = useState<any[]>([]);
  const [mascotaPorId, setMascotaPorId] = useState<any>(null);

  // Leer los datos de Firebase
  useEffect(() => {
    const mascotaRef = ref(db, 'mascotas/');
    onValue(mascotaRef, (snapshot) => {
      const data = snapshot.val();
      
      if (data) {
        let arregloTemp: any[] = Object.keys(data).map(id => ({
          id,
          ...data[id]
        }));
        setMascotas(arregloTemp);
      }
    });
  }, []);

  // Función para manejar el botón y traer los datos de una mascota específica por ID
  const buscarPorId = (id: string) => {
    const mascota = mascotas.find(m => m.id === id);
    setMascotaPorId(mascota);
  };

  // Función para mostrar detalles de una mascota al presionar un item
  const handleItemPress = (mascota: any) => {
    Alert.alert(
      'Más Información',
      `ID: ${mascota.id}\nNombre: ${mascota.nombre}\nEspecie: ${mascota.especie}\nEdad: ${mascota.edad}\nPropietario: ${mascota.propietario}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Mascotas</Text>

      {/* Primera sección: Buscar un registro por su ID */}
      <View style={styles.section}>
        <Text style={styles.subTitle}>Buscar por ID</Text>
        <Button title="Buscar Mascota ID 1" onPress={() => buscarPorId("1")} />
        <Button title="Buscar Mascota ID 2" onPress={() => buscarPorId("2")} />
        {/* Si hay una mascota seleccionada, mostramos sus detalles */}
        {mascotaPorId && (
          <Informacion mascota={mascotaPorId} />
        )}
      </View>

      {/* Segunda sección: Mostrar lista con un solo campo */}
      <View style={styles.section}>
        <Text style={styles.subTitle}>Lista de Nombres de Mascotas</Text>
        <FlatList
          data={mascotas}
          renderItem={({ item }) => (
            <View style={styles.mascotaContainer}>
              <Text style={styles.mascotaText}>{item.nombre}</Text>
              <Button title="Ver más" onPress={() => handleItemPress(item)} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
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
  section: {
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
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
