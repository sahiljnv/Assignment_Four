import { StyleSheet, Text, View, TextInput,Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { personalDetailCox } from '../../ContextConponents/PersonalDetailContext'
export default function OtpScreen({ navigation }) {
    const useContextNumber = useContext(personalDetailCox);
    const [code, setCode] = useState('');
    function onNextPageHandler(){
        if(code === '123456'){
            navigation.navigate('PersonalDetail');
        }else{
            console.warn("Please enter the correct code !");
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
                <Text style={styles.heading}>Activate Your Account</Text>
                <Text style={styles.message}>we have send the code by the SMS to phone number</Text>
                <View style={styles.numberContainer}>
                    <Text style={styles.phoneNumber}>{useContextNumber.number}</Text>
                    <Text style={styles.worngNumberText} onPress={() => navigation.goBack()}>Wrong Number?</Text>
                </View>
            </View>
            <View style={styles.middleContainer}>
                <Text style={styles.middleContainerHeading}>6 Digit Code</Text>
                <TextInput style={styles.codeInput} maxLength={6} keyboardType='numeric' onChangeText={setCode} />
            </View>
            <View style={styles.lowerContainer}>
            <View style={styles.outterButton}>
                    <Pressable style={({ pressed }) => pressed ? styles.button : null} >
                        <View style={styles.innerButtonForResend}>
                            <Text style={styles.buttonText}>ReSend</Text>
                           
                        </View>
                    </Pressable>
                </View>
                <View style={styles.outterButton}>
                    <Pressable style={({ pressed }) => pressed ? styles.button : null} >
                        <View style={styles.InnerButton}>
                            <Text style={styles.buttonText} onPress={onNextPageHandler}>NEXT</Text>
                           
                        </View>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 13,
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    upperContainer: {
        flex: 3,
    },
    middleContainer: {
        paddingTop: 20,
        flex: 4,
        alignItems: 'center'
    },
    lowerContainer: {
        flex: 5,
        alignItems:'center'
    },
    heading: {

        color: 'black',
        fontSize: 25,
        marginBottom: 25
    },
    message: {
        color: 'black',
        fontSize: 15,
        marginBottom: 10
    },
    numberContainer: {
        flexDirection: 'row'
    },
    phoneNumber: {
        color: 'black'
    },
    worngNumberText: {
        color: 'red',
        paddingLeft: 10,
        textDecorationLine: 'underline'
    },
    middleContainerHeading: {
        color: 'black',
        fontSize: 18
    },
    codeInput: {
        borderWidth: 2,
        borderColor: 'gray',
        width: '60%',
        marginTop: 10,
        paddingHorizontal: 20,
        color: 'black',
        fontSize: 20,
        textAlign: 'center'

    }, InnerButton: {
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
        marginVertical:5
    },
    innerButtonForResend:{
        backgroundColor: 'gray',
        height: 50,
        justifyContent: 'center'
    },
})