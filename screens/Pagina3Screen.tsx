import { Alert, Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Pagina3Screen() {
  const [nombre, setnombre] = useState('');
  const [edad, setedad] = useState(0);

  useEffect(() => {
    if (edad < 0) {
      setedad(0);
    }
  }, [edad]);

  function usuario() {
    Alert.alert('Mensaje', `${nombre} tiene ${edad} años`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FORMULARIO</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresar Nombre"
        placeholderTextColor="#aaa"
        onChangeText={(texto) => setnombre(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresar Edad"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        onChangeText={(texto) => setedad(+texto)}
      />

      <TouchableOpacity style={styles.button} onPress={() => usuario()}>
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff', 
    fontSize: 18,
    height: 50,
    width: '90%',
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10, 
    borderWidth: 1,
    borderColor: '#ddd', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, 
  },
  button: {
    backgroundColor: '#007BFF', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4, 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
