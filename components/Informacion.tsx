import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Mascota = {
  id: string;
  nombre: string;
  especie: string;
  edad: string;
  propietario: string;
};

interface InformacionProps {
  mascota: Mascota;
}

const Informacion: React.FC<InformacionProps> = ({ mascota }) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>ID: {mascota.id}</Text>
      <Text style={styles.infoText}>Nombre: {mascota.nombre}</Text>
      <Text style={styles.infoText}>Especie: {mascota.especie}</Text>
      <Text style={styles.infoText}>Edad: {mascota.edad} años</Text>
      <Text style={styles.infoText}>Propietario: {mascota.propietario}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Informacion;
