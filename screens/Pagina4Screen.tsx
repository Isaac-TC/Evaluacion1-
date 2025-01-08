import { Alert, Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Pagina4Screen() {
  const [kelvin, setKelvin] = useState('');
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  useEffect(() => {
    const kelvinValue = parseFloat(kelvin);
    if (kelvinValue < 0) {
      setKelvin('0');
    } else {
      setCelsius(kelvinValue - 273.15);
      setFahrenheit((kelvinValue - 273.15) * 9 / 5 + 32);
    }
  }, [kelvin]);

  function showResults() {
    Alert.alert(
      'Resultados',
      `Kelvin: ${kelvin}K\nCelsius: ${celsius.toFixed(2)}°C\nFahrenheit: ${fahrenheit.toFixed(2)}°F`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convertidor de Temperatura</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresar grados Kelvin"
        keyboardType="numeric"
        onChangeText={(texto) => setKelvin(texto)}
        value={kelvin}
      />

      <TouchableOpacity style={styles.button} onPress={showResults}>
        <Text style={styles.buttonText}>Convertir</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 20,
    height: 50,
    width: '85%',
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
