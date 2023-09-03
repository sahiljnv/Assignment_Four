import { StyleSheet, Text, View, TextInput, Pressable, Image, Modal, FlatList } from 'react-native'
import React, { useState, useContext } from 'react'
import { CountryCode } from '../../Data/CountryCode/CountryCodes';
import { personalDetailCox } from '../../ContextConponents/PersonalDetailContext';

function isNumberOrPluseSign( chr ){ return '1234567890+'.indexOf( chr[0]) !== -1 }
function checkNumber(number){
    let checkBool = true;
    for (let i = 0; i < number.length; i++) {
        if(isNumberOrPluseSign(number.charAt(i))=== false){
            return checkBool = false;
        }
        
    }
    return checkBool;
}

export default function VerifyNumberScreen({navigation}) {
    const usePersonalDetail = useContext(personalDetailCox);
    usePersonalDetail.setCountry(countryName)
    const [countryName, setCountryName] = useState("Select Country...");
    const [modalVisible, setModalVisible] = useState(false);   
    function navigateToNextSreen() {
        if(usePersonalDetail.number.length >= 10 ){
            if(checkNumber(usePersonalDetail.number)){
                navigation.navigate('OptScreen')
            }else{
                console.warn("Please enter the valid number !");

            }
        }else{
            console.warn("Please enter the number !");
        }
    }
    function selectLangHandler({ name , dial_code}) {
        setCountryName(name);
        usePersonalDetail.setNumber(dial_code)
        setModalVisible(false)
    }
    function renderCountry({ item }) {

        return(
            <View style={styles.countryContainer}>

            <Pressable key={item.dial_code} style={styles.CountryButton} onPress={() => selectLangHandler(item)}>
                <Text key={item.code} style={styles.CountryName}>{item.name}  ({item.dial_code} )</Text>
            </Pressable>
            </View>

        )
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.IconContainer}>
                <Image source={require('../../Images/cookingLogo.jpg')} style={styles.img} />
                <Text style={styles.title}>HungerOrder</Text>
            </View>
            <View style={styles.setLagContainer}>
                <Text style={styles.inputLabel}>Enter Your Mobile Number</Text>
                <Pressable style={styles.countryNameContainer} onPress={() => setModalVisible(true)}>
                    <Text style={styles.countryTextName}>{countryName}</Text>
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
                            data={CountryCode}
                            renderItem={renderCountry}
                            keyExtractor={item => item.code}
                        />
                    </View>
                </Modal>
                <TextInput keyboardType = 'numeric' style={styles.inputText} value={ usePersonalDetail.number} onChangeText={usePersonalDetail.setNumber} />

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
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    IconContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    setLagContainer: {
        flex: 4,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    buttonContainer: {
        flex: 4,
        alignItems: 'center',
        paddingTop: 25
    },
    img: {
        width: '40%',
        height: '50%'
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputLabel: {
        color: 'black',
        fontSize: 22,
        paddingBottom: 20

    },
    inputText: {
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
        color: 'black',
        paddingHorizontal: 15
    },
    InnerButton: {
        backgroundColor: '#f47e26',
        height: 50,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    },
    button: {
        opacity: 0.5,

    },
    outterButton: {
        width: '85%',
        marginTop:10
    },
    countryNameContainer: {
        height: 55,
        borderWidth: 2,
        borderColor: "black",
        justifyContent: 'center',
        paddingLeft: 15
    },
    countryTextName: {
        color: 'black',
        fontSize: 20
    },
    centeredView: {
        flex: 1,
        marginTop: 22,
        alignItems: 'center'
    },
    modalTitle: {
        color: 'black',
        fontSize: 30,
        paddingBottom: 20
    },
    CountryName: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        
    },
    CountryButton: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 5,
        width: "90%"   
    },
    countryContainer:{
        alignItems:'center'
    }
})