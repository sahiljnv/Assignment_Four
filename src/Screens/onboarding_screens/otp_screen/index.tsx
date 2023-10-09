import { Text, View, TextInput,Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { personalDetailCox } from '../../../context_conponents/personal_detail_context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './style';
import { stackOnboardingParamsList } from '../../../navigation/type';
export type navigationOptScreenProps = NativeStackScreenProps<stackOnboardingParamsList, 'OptScreen','onboardingStack'>;

const  OtpScreen : React.FC<navigationOptScreenProps>=(props)=> {
    const { navigation } = props
    const useContextNumber = useContext(personalDetailCox);
    const [code, setCode] = useState<string>('');
    function onNextPageHandler(): void{
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

export default  OtpScreen;
