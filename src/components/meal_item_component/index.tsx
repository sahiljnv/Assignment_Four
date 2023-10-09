import { Text, View,Pressable,Image,ImageSourcePropType } from 'react-native'
import React, {useState, Dispatch, SetStateAction} from 'react'
import AddIcon from 'react-native-vector-icons/AntDesign';
import RatingIconCoponent from '../rating_icon_component';
import { styles } from './style';
import { addMeal, removeMeal } from '../../utils/utilities';
type MealComponentProps = {
    id : string,
    img: ImageSourcePropType,
    mealName: string,
    mealPrice:number,
    mealSubTitle:string,
    rating: string,
    setMealItemIds:Dispatch<SetStateAction<string[]>>,
}
const MealItemComponent = ({id,img,mealName,mealPrice,mealSubTitle,rating,setMealItemIds} :MealComponentProps) => {
   

    const [checkMealAdd, setCheckMealAdd] = useState(false);
    const heandleAddMeal=(id: string)=>{
        if(checkMealAdd){
            setCheckMealAdd(false);
            setMealItemIds(removeMeal(id));
        }else{
            setCheckMealAdd(true);
            setMealItemIds(addMeal(id));
        }
    }
    return (
                <View style={styles.mealItemContainer}>
                    <Pressable style={({ pressed }) => pressed ? styles.itemButton : null} onPress={()=>heandleAddMeal(id)}>
                        <View style={[styles.innermealItemCOntainer,{backgroundColor : checkMealAdd ? '#f4ac6b':'#fff8f2'}]}>
                            <View style={styles.itemImage}>
                                <Image source={img} style={styles.mealImg} />

                            </View>
                            <View style={styles.itemDetail}>
                                <View style={styles.mealNameContainer}>
                                    <Text style={styles.mealName}>{mealName}</Text>
                                    <Text style={styles.mealPrice}>{mealPrice} R</Text>
                                </View>
                                <Text style={styles.mealSubTitle}>{mealSubTitle}</Text>
                            </View>
                            <View style={styles.itemAddIconAndRating}>
                                <RatingIconCoponent rating={rating} backgroundColor='#f47e26' color='white' />
                                <AddIcon name={checkMealAdd? 'pluscircle':'pluscircleo'} color='#f47e26' size={25} />

                            </View>
                        </View>
                    </Pressable>
                </View> 
    )
}


export default MealItemComponent;