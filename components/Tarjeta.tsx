import { Alert, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta( props : any ) {
    //console.log(props.informacion.name);

    function detalles(item:any){
      Alert.alert( item.titulo , item.anio )
    }
  return (
    <TouchableOpacity style={styles.container} onPress={ ()=> detalles(props.informacion) }>
      <Text style={styles.txtTitulo}>{props.informacion.name}</Text>
      <View style={styles.fila}>
      <Image 
      source={{uri: props.informacion.image}}
      style={styles.img}/>
      <Text style={styles.txtDescripcion}>
        {props.informacion.description}
      </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    txtTitulo:{
        fontSize:25,
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    },
    img:{
        height:150,
        width:60,
        resizeMode:'contain'
    },
    container:{
        backgroundColor:'#00000085',
        margin:1,
        borderRadius:20

    },
    fila:{
      flexDirection:'row'
    },
    txtDescripcion:{
      color:'white',
      width:'65%',
      justifyContent:'center',
      fontSize:15,
      textAlign:'justify'

    }
})