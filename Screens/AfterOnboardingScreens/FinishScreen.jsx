import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FinishScreen({navigation}) {
    const currentDate = new Date();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Order Placed on</Text>
        <Text style={styles.title}>{currentDate.getFullYear()+"/"+ currentDate.getMonth() + "/"+ currentDate.getDate() +' At ' + currentDate.getHours()+'.'+ currentDate.getMinutes()}</Text>
        <Text style={styles.homeButton} onPress={()=> navigation.navigate('HomeScreen')}>go home</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%',
        backgroundColor:'white',
        padding:20,
        paddingTop:200
    },
    subContainer:{
        backgroundColor:'#fff8f2',
        width:"100%",
        height:200,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'black'
    }, 
    homeButton:{
        color:'#f47e26',
        textDecorationLine: 'underline'
        }
})