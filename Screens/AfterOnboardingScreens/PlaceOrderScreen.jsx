import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from 'react-native'
import CheckBox from 'react-native-check-box';
import React, { useContext, useState } from 'react'
import { personalDetailCox } from '../../ContextConponents/PersonalDetailContext'
const PlaceOrderScreen = ({ route, navigation }) => {
    const sumOfAllSelectedItem = route.params.sumOfAllSelectedItem;
    const usePersonalDetailCox = useContext(personalDetailCox);
    const [checkAddressChange, setChangeAddressChange] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const changeAddressHandler = () => {
        setChangeAddressChange(!checkAddressChange)
    }
    const orderButtonHandler= ()=>{
        navigation.navigate('FinishScreen');
    }
    return (

        <View style={styles.mainContainer}>
           
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>User Details</Text>
                    <View style={styles.warningContainer}>
                        <Text style={styles.warningText}>Please input correct information.</Text>
                    </View>
                </View>
                <>
                <View style={styles.detailContainer}>
                    <TextInput style={styles.personlInfo} placeholder='Full Name' placeholderTextColor={'gray'} />
                    <TextInput style={styles.personlInfo} placeholder='Email' placeholderTextColor={'gray'} />
                    <TextInput style={styles.personlInfo} placeholder='Number' placeholderTextColor={'gray'} />
                    <Text style={styles.detailTitle}>Address</Text>
                    {
                        checkAddressChange ?
                            <View style={styles.addressComponen}>
                                <TextInput style={[styles.address, { color: 'black' }]} onChangeText={usePersonalDetailCox.setAddress} />
                                <View>
                                    <Pressable style={({ pressed }) => pressed ? styles.orderButton : null} onPress={changeAddressHandler} >
                                        <View style={styles.innerOnChangeAddress}>
                                            <Text style={styles.changeAddressButtonText}>Save Address</Text>
                                        </View>
                                    </Pressable>
                                </View>

                            </View>
                            :
                            <View style={styles.addressComponen}>
                                <Text style={styles.address}>{usePersonalDetailCox.address}</Text>
                                <View>
                                    <Pressable style={({ pressed }) => pressed ? styles.orderButton : null} onPress={changeAddressHandler} >
                                        <View style={styles.innerOnChangeAddress}>
                                            <Text style={styles.changeAddressButtonText}>Change Address</Text>
                                        </View>
                                    </Pressable>
                                </View>

                            </View>



                    }

                    <Text style={styles.detailTitle}>Select Payment Method</Text>
                    <View style={styles.checkBoxContainer}>
                        <CheckBox isChecked={!isSelected} onClick={() => setSelection(!isSelected)} style={styles.checkBox} checkBoxColor='#f47e26' />
                        <Text style={styles.checkBoxTitle}>Credit/Debit Card</Text>
                    </View>
                    <View style={styles.checkBoxContainer}>
                        <CheckBox isChecked={isSelected} onClick={() => setSelection(!isSelected)} style={styles.checkBox} checkBoxColor='#f47e26' />
                        <Text style={styles.checkBoxTitle}>Cash of delivery</Text>

                    </View>

                    <Text style={styles.detailTitle}>Order Summary</Text>
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
                            <Text style={styles.mealPrice}>{sumOfAllSelectedItem + 1} Rupee</Text>

                        </View>
                    </View>


                </View>
            </>
            <View style={styles.buttonContainer}>
                <Pressable style={({ pressed }) => pressed ? styles.orderButton : null} onPress={orderButtonHandler}>
                    <View style={styles.innerOrderContainer}>
                        <Text style={styles.orderText}>Order Now</Text>

                    </View>
                </Pressable>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    headerContainer: {
        flex: 1.5,
    },
    detailContainer: {
        flex: 10,
        marginHorizontal: 25
    },
    buttonContainer: {
        flex: 0.9,
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

    },
    headerTitle: {
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    warningContainer: {
        backgroundColor: '#f8f8f8',
        paddingVertical: 5,
        margin: 10,
        paddingLeft: 10,
        borderRadius: 10
    },
    warningText: {
        color: 'red'
    },
    personlInfo: {
        borderColor: 'gray',
        borderBottomWidth: 2,
        color: 'black'
    },
    detailTitle: {
        color: 'black',
        fontSize: 20,
        paddingVertical: 15,
        fontWeight: 'bold'
    },
    addressComponen: {
        width: '100%',
        height: 100,

    },
    address: {
        color: 'gray',
        height: 60,
        borderColor: 'gray',
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: 10
    },

    innerOnChangeAddress: {
        backgroundColor: '#f47e26',
        height: 40,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'center'
    },
    changeAddressButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    checkBoxContainer: {
        flexDirection: 'row'
    },
    checkBoxTitle: {
        color: 'gray',
        fontSize: 15,
        paddingLeft: 10
    },
    PriceContainer: {
        paddingTop: 10,
        paddingBottom: 18,
        borderBottomWidth: 2,
        borderColor: 'gray',

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

})

export default PlaceOrderScreen;