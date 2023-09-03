import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RatingIconCoponent = (props) => {

    return (
        <View style={[styles.reviewIon, {backgroundColor:props.backgroundColor}]} >
            <Text style={[styles.reviewIconText,{color:props.color}]}>{props.rating}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    reviewIon: {
        backgroundColor: '#f47e26',
        borderRadius: 3,
        height: 25,
        width: 25,
        justifyContent: 'center',
      },
      reviewIconText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15
      }
})

export default RatingIconCoponent;