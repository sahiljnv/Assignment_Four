import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native'
import React, { useState,useContext } from 'react'
import { languageData } from '../../Data/Language-Data';

export default function SelectLagScreen({ navigation }) {
    const [language, setLanguage] = useState('Select.....');
    const [modalVisible, setModalVisible] = useState(false);

    function navigateToNextSreen() {
        if(language !== 'Select.....')
        navigation.navigate('VerifyNum')
    }
    function selectLangHandler(item) {
        setLanguage(item);
        setModalVisible(false)
    }
   

    return (
        <View style={styles.mainContainer}>
            <View style={styles.IconContainer}>
                <Image source={require('../../Images/cookingLogo.jpg')} style={styles.img} />
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

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    IconContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    setLagContainer: {
        flex: 4,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    buttonContainer: {
        flex: 4,
        alignItems: 'center'
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

    },
    setLangContainer: {
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 30,
        color: 'black',
        paddingHorizontal: 10,
        height: 60,
        justifyContent: 'center'

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
    },
    language: {
        color: 'black',
        fontSize: 25
    },
    centeredView: {
        flex: 1,
        marginTop: 22,
        alignItems:'center'
    },
    modalTitle: {
        color: 'black',
        fontSize: 30,
        paddingBottom:20
    },
    langName:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    },
    langContainer:{
        backgroundColor:'gray',
        padding:10,
        margin:5,
        width:"50%"
    }
})