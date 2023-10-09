import {Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
const RatingIconCoponent = (props) => {

    return (
        <View style={[styles.reviewIon, {backgroundColor:props.backgroundColor}]} >
            <Text style={[styles.reviewIconText,{color:props.color}]}>{props.rating}</Text>
        </View>
    )
}



export default RatingIconCoponent;