import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import datos from '../assets/data/crash.json';
import Tarjeta from '../components/Tarjeta';

export default function Pagina1Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crash Data</Text>
      <FlatList
        data={datos}
        renderItem={({ item }) => <Tarjeta informacion={item} />}
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', 
    textAlign: 'center',
    marginVertical: 20, 
  },
  listContainer: {
    paddingBottom: 20, 
  },
});
