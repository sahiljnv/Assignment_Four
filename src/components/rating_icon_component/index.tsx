import {Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'

type RatingIconProps = {
    rating: string,
    backgroundColor:string,
    color:string
}
const RatingIconCoponent = (props : RatingIconProps) => {

    return (
        <View style={[styles.reviewIon, {backgroundColor:props.backgroundColor}]} >
            <Text style={[styles.reviewIconText,{color:props.color}]}>{props.rating}</Text>
        </View>
    )
}



export default RatingIconCoponent;