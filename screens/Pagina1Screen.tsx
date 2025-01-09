import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

function AddPetScreen() {
  // Estados para los campos del formulario
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');

  // Función para manejar el registro de la mascota
  const handleRegisterPet = () => {
    if (petName && ownerName && species && age) {
      Alert.alert('Registro exitoso', `Se ha registrado a ${petName} correctamente.`);
      // Limpiar los campos
      setPetName('');
      setOwnerName('');
      setSpecies('');
      setAge('');
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos antes de registrar.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Mascota</Text>

      {/* Campo para el nombre de la mascota */}
      <Text style={styles.label}>Nombre de la Mascota</Text>
      <TextInput
        style={styles.input}
        value={petName}
        onChangeText={setPetName}
        placeholder="Ej: Firulais"
      />

      {/* Campo para el nombre del dueño */}
      <Text style={styles.label}>Nombre del Dueño</Text>
      <TextInput
        style={styles.input}
        value={ownerName}
        onChangeText={setOwnerName}
        placeholder="Ej: Juan Pérez"
      />

      {/* Campo para la especie */}
      <Text style={styles.label}>Especie</Text>
      <TextInput
        style={styles.input}
        value={species}
        onChangeText={setSpecies}
        placeholder="Ej: Perro, Gato"
      />

      {/* Campo para la edad */}
      <Text style={styles.label}>Edad</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Ej: 3 años"
        keyboardType="numeric"
      />

      {/* Botón para registrar */}
      <View style={styles.buttonContainer}>
        <Button title="Registrar Mascota" onPress={handleRegisterPet} />
      </View>
    </View>
  );
}

export default AddPetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
