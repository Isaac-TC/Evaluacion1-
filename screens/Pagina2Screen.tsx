import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Tarjeta2 from '../components/Tarjeta2';

export default function Pagina2Screen() {
  const [datos, setdatos] = useState();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function leer() {
      try {
        const resp = await fetch('https://api.sampleapis.com/futurama/characters');
        const json = await resp.json();
        setdatos(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); 
      }
    }
    leer();
  }, []);

  if (loading) {
    
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personajes de Futurama</Text>
      <FlatList
        data={datos}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => <Tarjeta2 datos={item} />}
        contentContainerStyle={styles.listContainer} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', 
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
    textAlign: 'center',
    marginVertical: 20, 
  },
  listContainer: {
    paddingBottom: 20, 
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  loadingText: {
    fontSize: 18,
    color: '#555', 
    marginTop: 10,
  },
});
