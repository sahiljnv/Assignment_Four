import {Text, View, Image, TextInput, Pressable} from 'react-native'
import React,{useContext} from 'react'
import Arrow from 'react-native-vector-icons/AntDesign';
import { personalDetailCox } from '../../../context_conponents/personal_detail_context';
import { styles } from './/style';
const  PersonalDetailScreen=()=> {
   const usePersonalDetailCox = useContext(personalDetailCox);
    function handerFinishOnPress(){
        if( usePersonalDetailCox.personName !='' && usePersonalDetailCox.email != '' && usePersonalDetailCox.region != '' && usePersonalDetailCox.address !='' ){
            usePersonalDetailCox.setCheckCompliteOnboarding(true)

        }else{
            console.warn("Please fill all the detail !");
        }
    }
    return (
        
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
                <View style={styles.IconContainer}>
                    <Image source={require('../../../images/cooking-logo.jpg')} style={styles.img} />
                    <Text style={styles.title}>HungerOrder</Text>
                </View>
            </View>
            <View style={styles.middleContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput style={styles.inputText} placeholder='exmple: Sahil' placeholderTextColor={'gray'} onChangeText={usePersonalDetailCox.setPersonName} />

                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.inputText} placeholder='exmple: abc@gmail.com' placeholderTextColor={'gray'}  onChangeText={usePersonalDetailCox.setEmail} />

                <Text style={styles.label}>Home Address</Text>
                <TextInput style={[styles.inputText,{ textAlignVertical: 'top'}]} placeholderTextColor={'gray'} numberOfLines={6} multiline = {true} onChangeText={usePersonalDetailCox.setAddress}/>

                <Text style={styles.label}>Region</Text>
                <TextInput style={styles.inputText} placeholderTextColor={'gray'} onChangeText={usePersonalDetailCox.setRegion} />
            </View>
            <Pressable style={styles.lowerContainer} android_ripple={{color:'gray'}} onPress={handerFinishOnPress}>
                    <Text style={styles.buttonTitle}>FINISH</Text>
                    <View style={styles.iconContainer}>
                        <Arrow color='white' name='arrowright' size={30} />

                    </View>
            </Pressable>
        </View>
       
    )
}

export default  PersonalDetailScreen