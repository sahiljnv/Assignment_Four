import {Text, View, TextInput, Pressable, Image, Modal, FlatList, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { COUNTRY_CODE } from '../../../data/country_codes';
import { personalDetailCox } from '../../../context_conponents/personal_detail_context';
import { styles } from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { checkNumber } from '../../../utils/utilities';
import { stackOnboardingParamsList } from '../../../navigation/type';

export type navigationVerifyNumberProps = NativeStackScreenProps<stackOnboardingParamsList, 'VerifyNum'>;
const  VerifyNumberScreen:React.FC<navigationVerifyNumberProps>=(props)=> {
    const { navigation } = props
    const usePersonalDetail = useContext(personalDetailCox);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const navigateToNextSreen = () => {
        if (usePersonalDetail.number.length >= 10) {
            if (checkNumber(usePersonalDetail.number)) {
                navigation.navigate('OptScreen')
            } else {
                console.warn("Please enter the valid number !");

            }
        } else {
            console.warn("Please enter the number !");
        }
    }
    type detailsProps = {
        name : string,
        dial_code : string
    }
    function selectLangHandler({ name, dial_code }: detailsProps):void {
        usePersonalDetail.setCountry(name)
        usePersonalDetail.setNumber(dial_code)
        setModalVisible(false)
    }
    function renderCountry({ item}:any):React.JSX.Element {

        return (
            <View style={styles.countryContainer}>

                <Pressable key={item.dial_code} style={styles.CountryButton} onPress={() => selectLangHandler(item)}>
                    <Text key={item.code} style={styles.CountryName}>{item.name}  ({item.dial_code} )</Text>
                </Pressable>
            </View>

        )
    }
    return (
        <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='position'>
                <View style={styles.mainContainer}>
                    <View style={styles.IconContainer}>
                        <Image source={require('../../../images/cooking-logo.jpg')} style={styles.img} />
                        <Text style={styles.title}>HungerOrder</Text>
                    </View>
                    <View style={styles.setLagContainer}>
                        <Text style={styles.inputLabel}>Enter Your Mobile Number</Text>
                        <Pressable style={styles.countryNameContainer} onPress={() => setModalVisible(true)}>
                            <Text style={styles.countryTextName}>{usePersonalDetail.country}</Text>
                        </Pressable>
                        <Modal
                            animationType="none"
                            transparent={false}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <Text style={styles.modalTitle}>Country</Text>
                                <FlatList
                                    data={COUNTRY_CODE}
                                    renderItem={renderCountry}
                                    keyExtractor={item => item.code}
                                />
                            </View>
                        </Modal>
                        <TextInput keyboardType='numeric' style={styles.inputText} value={usePersonalDetail.number} onChangeText={usePersonalDetail.setNumber} />

                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.outterButton}>
                            <Pressable style={({ pressed }) => pressed ? styles.button : null} onPress={navigateToNextSreen} >
                                <View style={styles.InnerButton}>
                                    <Text style={styles.buttonText}>NEXT</Text>
                                </View>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default VerifyNumberScreen
