import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React, {useState, useEffect,useContext} from 'react'
import AddIcon from 'react-native-vector-icons/dist/AntDesign';
import RatingIconCoponent from './RatingIconCoponent';
import { personalDetailCox } from '../../ContextConponents/PersonalDetailContext';

const MealItemComponent = (props) => {
    const addRemoveMealFromCart = useContext(personalDetailCox);
    const [checkMealAdd, setCheckMealAdd] = useState(false);
    const heandleAddMeal=(id)=>{
        if(checkMealAdd){
            setCheckMealAdd(false);
            addRemoveMealFromCart.removeMeal(id);
        }else{
            setCheckMealAdd(true);
            addRemoveMealFromCart.addMeal(id);
        }

    }


    return (
                <View style={styles.mealItemContainer}>
                    <Pressable style={({ pressed }) => pressed ? styles.itemButton : null} onPress={()=>heandleAddMeal(props.id)}>
                        <View style={[styles.innermealItemCOntainer,{backgroundColor : checkMealAdd ? '#f4ac6b':'#fff8f2'}]}>
                            <View style={styles.itemImage}>
                                <Image source={props.img} style={styles.mealImg} />

                            </View>
                            <View style={styles.itemDetail}>
                                <View style={styles.mealNameContainer}>
                                    <Text style={styles.mealName}>{props.mealName}</Text>
                                    <Text style={styles.mealPrice}>{props.mealPrice} R</Text>
                                </View>
                                <Text style={styles.mealSubTitle}>{props.mealSubTitle}</Text>
                            </View>
                            <View style={styles.itemAddIconAndRating}>
                                <RatingIconCoponent rating={props.rating} backgroundColor='#f47e26' color='white' />
                                <AddIcon name={checkMealAdd? 'pluscircle':'pluscircleo'} color='#f47e26' size={25} />

                            </View>
                        </View>
                    </Pressable>
                </View> 
    )
}

const styles = StyleSheet.create({
    
    mealItemContainer: {
        width:364,// this is the error
        backgroundColor: '',
        marginVertical:5
    },
    itemButton: {
        opacity: 0.5
    },
    innermealItemCOntainer: {
        height: 150,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center'
    },
    itemImage: {
        flex: 2
    },
    itemDetail: {
        flex: 4
    },
    itemAddIconAndRating: {
        flex: 1,
        alignItems: 'flex-end',
        height: 120,
        justifyContent: 'space-between'
    },
    mealImg: {
        height: 80,
        width: 80,
        borderRadius: 10
    },
    mealName: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    mealPrice: {
        color: '#f47e26',
        fontSize: 18,
        fontWeight: 'bold'
    },
    mealNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mealSubTitle: {
        color: 'black'
    }

})

export default MealItemComponent;