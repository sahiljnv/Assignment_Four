import {Text, View, Pressable, ScrollView} from 'react-native'
import React, {useState, useEffect } from 'react'
import { styles } from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackAfterOnboardingParamsList } from '../../../navigation/type';
type navigationOrderDetailScreenProps = NativeStackScreenProps<stackAfterOnboardingParamsList, 'OrderDetailScreen','StackAfterOnboarding'>;

const OrderDetailScreen: React.FC<navigationOrderDetailScreenProps>=(props)=> {
    const { route, navigation } = props
    const companyName = route.params.compName;
    const listOfOrder =  route.params?.listOfMealOrder;
    const [sumOfAllSelectedItem, setSumOfAllSelectedItem] = useState(0);

     const orderButtonHandler= ()=>{
        navigation.navigate('PlaceOrder',{
            sumOfAllSelectedItem:sumOfAllSelectedItem
        })
     }
    useEffect(() => {
        let sum = 0;
            listOfOrder?.forEach(meal => {
                sum += meal.price;
            });
        
       
        setSumOfAllSelectedItem(sum)
    }, [navigation])

    return (
        <View style={styles.mainComponent}>
            <View style={styles.titleContainer}>
                <Text style={styles.companyTitle}>{companyName}</Text>
            </View>
            <View style={styles.orderList}>
                <ScrollView>
                    <View style={styles.showAllSelectetItem}>
                        {
                            listOfOrder?.map((mealSelectedData) => {
                                return (
                                    <View key={mealSelectedData.id} style={styles.mealOrderComponent}>
                                        <View>

                                        </View>
                                        <View style={styles.headingMealOrderComponent}>
                                            <Text style={styles.mealName}>{mealSelectedData.name}</Text>
                                            <Text style={styles.mealPrice}>{mealSelectedData.price} Rupee</Text>
                                        </View>
                                        <Text style={styles.subHeading}>{mealSelectedData.ingredients}</Text>
                                    </View>
                                )
                            })
                        }


                    </View>
                    <View style={styles.PriceContainer}>
                        <View style={styles.headingMealOrderComponent}>
                            <Text style={styles.mealName}>Sub Total</Text>
                            <Text style={styles.mealPrice}>{sumOfAllSelectedItem} Rupee</Text>

                        </View>
                        <View style={styles.headingMealOrderComponent}>
                            <Text style={styles.mealName}>Delivery Order</Text>
                            <Text style={styles.mealPrice}>1 Rupee</Text>

                        </View>
                    </View>

                    <View style={styles.PriceContainer}>
                        <View style={styles.headingMealOrderComponent}>
                            <Text style={styles.mealName}>Total</Text>
                            <Text style={styles.mealPrice}>{sumOfAllSelectedItem +1 } Rupee</Text>

                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.placeOrder}>
                <Pressable style={({ pressed }) => pressed ? styles.orderButton : null} onPress={orderButtonHandler} >
                    <View style={styles.innerOrderContainer}>
                        <Text style={styles.orderText}>Order Now</Text>

                    </View>
                </Pressable>

            </View>

        </View>
    )
}

export default OrderDetailScreen;
