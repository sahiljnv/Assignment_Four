import { StyleSheet, Text, View, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { personalDetailCox } from '../../ContextConponents/PersonalDetailContext';

export default function OrderDetailScreen({ route, navigation }) {
    const companyName = route.params.compName;
    const listOfOrder = route.params.listOfMealOrder;
    const useMealIdsToPrintOrder = useContext(personalDetailCox);
    const [sumOfAllSelectedItem, setSumOfAllSelectedItem] = useState(0);
    useEffect(() => {
        // const initialValue = 0;
        // sumOfAllSelectedItem = listOfOrder.reduce((accumulator, currentValue)=>accumulator+currentValue,initialValue)
        let sum = 0;
        listOfOrder.forEach(meal => {
            sum += meal.price;
        });
        setSumOfAllSelectedItem(sum)
        console.log(sumOfAllSelectedItem)
    }, [navigation, useMealIdsToPrintOrder])

    return (
        <View style={styles.mainComponent}>
            <View style={styles.titleContainer}>
                <Text style={styles.companyTitle}>{companyName}</Text>
            </View>
            <View style={styles.orderList}>
                <ScrollView>
                    <View style={styles.showAllSelectetItem}>
                        {
                            listOfOrder.map((mealSelectedData) => {
                                return (
                                    <View style={styles.mealOrderComponent}>
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
                <Pressable style={({ pressed }) => pressed ? styles.orderButton : null} >
                    <View style={styles.innerOrderContainer}>
                        <Text style={styles.orderText}>Order Now</Text>

                    </View>
                </Pressable>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainComponent: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',

    },
    companyTitle: {
        color: "black",
        fontSize: 20,

    },
    titleContainer: {
        flex: 0.9,
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: 'gray',
        justifyContent: 'center',
        marginHorizontal: 25

    },
    orderList: {
        flex: 10,
        marginBottom:10
    },
    placeOrder: {
        flex: 1,
    },
    orderButton: {
        opacity: 0.5
    },
    innerOrderContainer: {
        height: '100%',
        width: '100',
        justifyContent: 'center',
        backgroundColor: '#f47e26'
    },
    orderText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'

    }, mealOrderComponent: {
        paddingTop: 10,
    },
    mealPrice: {
        color: '#f47e26',
        fontSize: 18,
        fontWeight: 'bold'
    },
    mealName: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    headingMealOrderComponent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subHeading: {
        color: 'gray',
        width: '40%',
        fontSize: 15,
        textAlign: 'left'
    },
    showAllSelectetItem: {
        borderBottomWidth: 2,
        borderColor: 'gray',
        marginHorizontal: 25,
        paddingBottom: 30
    },
    PriceContainer:{ 
        paddingTop: 10,
        paddingBottom:30,
        borderBottomWidth:2,
        borderColor:'gray',
        marginHorizontal:25
    }
    


})
