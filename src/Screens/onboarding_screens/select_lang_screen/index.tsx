import {Text, View, Image, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import { LANGUAGE } from '../../../data/language_data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './style';
import { stackOnboardingParamsList } from '../../../navigation/type';
export type navigationSelectLangProps = NativeStackScreenProps<stackOnboardingParamsList, 'SelectLag'>;

const SelectLagScreen:React.FC<navigationSelectLangProps>=(props)=>{
    const { navigation } = props
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
                <Image source={require('../../../images/cooking-logo.jpg')} style={styles.img} />
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
                            LANGUAGE.map((item)=>{
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