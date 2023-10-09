import {Text, View, Pressable, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from './style';
import { personalDetailCox } from '../../../context_conponents/personal_detail_context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackAfterOnboardingParamsList } from '../../../navigation/dash_board_stack';
type navigationPlaceOrderScreenProps = NativeStackScreenProps<stackAfterOnboardingParamsList, 'PlaceOrder','StackAfterOnboarding'>;

const PlaceOrderScreen = ({ route, navigation }:navigationPlaceOrderScreenProps) => {
    const sumOfAllSelectedItem = route.params.sumOfAllSelectedItem;
    const usePersonalDetailCox = useContext(personalDetailCox);
    const [checkAddressChange, setChangeAddressChange] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const changeAddressHandler = () => {
        setChangeAddressChange(!checkAddressChange)
    }
    const orderButtonHandler = () => {
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
                    <TextInput style={styles.personlInfo} placeholder='Full Name' placeholderTextColor={'gray'} value={usePersonalDetailCox.personName} />
                    <TextInput style={styles.personlInfo} placeholder='Email' placeholderTextColor={'gray'} value={usePersonalDetailCox.email} />
                    <TextInput style={styles.personlInfo} placeholder='Number' placeholderTextColor={'gray'} value={usePersonalDetailCox.number} />
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
                    <Pressable style={styles.checkBoxContainer} onPress={()=>setSelection(!isSelected)}>
                        <View style={[styles.radioButton, {backgroundColor: isSelected ? '#f47e26': 'white'}]}></View>
                        <Text style={styles.checkBoxTitle}>Credit/Debit Card</Text>
                    </Pressable>
                    <Pressable style={styles.checkBoxContainer} onPress={()=>setSelection(isSelected)}>
                        <View style={[styles.radioButton,{backgroundColor: isSelected ? 'white': '#f47e26'}]}></View>
                        <Text style={styles.checkBoxTitle}>Cash of delivery</Text>

                    </Pressable>

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



export default PlaceOrderScreen;