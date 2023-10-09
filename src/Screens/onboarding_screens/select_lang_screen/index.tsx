import {Text, View, Image, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import { languageData } from '../../../Data/Language-Data';
import { stackOnboardingParamsList } from '../../../navigation/onboarding_stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './style';
export type navigationSelectLangProps = NativeStackScreenProps<stackOnboardingParamsList, 'SelectLag'>;
function SelectLagScreen({ navigation }: navigationSelectLangProps) :React.JSX.Element{
    const [language, setLanguage] = useState<string>('Select.....')
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    function navigateToNextSreen():void {
        if(language !== 'Select.....')
        navigation.navigate('VerifyNum')
    }
    function selectLangHandler(item : string) : void {
        setLanguage(item);
        setModalVisible(false)
    }
   

    return (
        <View style={styles.mainContainer}>
            <View style={styles.IconContainer}>
                <Image source={require('../../../Images/cookingLogo.jpg')} style={styles.img} />
                <Text style={styles.title}>HungerOrder</Text>
            </View>
            <View style={styles.setLagContainer}>
                <Text style={styles.inputLabel}>Select Language</Text>
                <Pressable style={styles.setLangContainer} onPress={() => setModalVisible(true)} >
                    <Text style={styles.language}>{language}</Text>
                </Pressable>
                <Modal
                    animationType="none"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <Text style={styles.modalTitle}>Languages</Text>
                        {
                            languageData.map((item)=>{
                                return (
                                    <Pressable key={item} style={styles.langContainer} onPress={()=>selectLangHandler(item)}>
                                        <Text key={item} style={styles.langName}>{item}</Text>
                                    </Pressable>
                                )
                            })
                        }
                    </View>
                </Modal>

            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.outterButton}>
                    <Pressable style={({ pressed }) => pressed ? styles.button : null} onPress={navigateToNextSreen} >
                        <View style={styles.InnerButton}>
                            <Text style={styles.buttonText}>NEXT</Text>
                            {

                            }
                        </View>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}



export default SelectLagScreen;