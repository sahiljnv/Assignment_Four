import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React,{useContext} from 'react'
import Arrow from 'react-native-vector-icons/dist/AntDesign';
import { personalDetailCox } from '../../ContextConponents/PersonalDetailContext';
export default function PersonalDetailScreen() {
   const usePersonalDetailCox = useContext(personalDetailCox);
    function handerFinishOnPress(){
        if( usePersonalDetailCox.personName !='' && usePersonalDetailCox.email != '' && usePersonalDetailCox.region != '' && usePersonalDetailCox.address !='' ){
            usePersonalDetailCox.setCheckCompliteOnbording(true)

        }else{
            console.warn("Please fill all the detail !");
        }
    }
    return (
       
        <View style={styles.mainContainer}>
         
    
            <View style={styles.upperContainer}>
                <View style={styles.IconContainer}>
                    <Image source={require('../../Images/cookingLogo.jpg')} style={styles.img} />
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

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    upperContainer: {
        flex: 3,
    },
    middleContainer: {
        flex: 8,
        paddingHorizontal: 15
    },
    lowerContainer: {
        flex: 1,
        backgroundColor: '#f47e26',
        justifyContent: 'center',
        alignItems: 'center'
    }, IconContainer: {
        flex: 3,
        justifyContent: 'flex-start',
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
    label: {
        color: 'black',
        fontSize: 20
    },
    inputText: {
        borderWidth: 2,
        borderColor: 'gray',
        marginVertical: 10,
        color: 'black',
        paddingHorizontal: 10,    
    },
    buttonTitle: {
        color: 'white',
        fontSize: 20
    },
    iconContainer: {
        position: 'absolute',
        right: 15
    },
})