import {Text, View } from 'react-native'
import React from 'react'
import { styles } from './style';
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

