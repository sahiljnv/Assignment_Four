import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'
import Delivery from 'react-native-vector-icons/dist/MaterialIcons';
import PickUp from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const CompanyDetailComponent = (props) => {
    const navigation = useNavigation();

    const onPressHandler = ()=>{
        navigation.navigate('MealItems',{
            companyId:props.id
        })
    }
    return (
        <Pressable style={({pressed})=>pressed? styles.button: null} onPress={onPressHandler}>
        <View style={styles.companyContainer}>
            <View style={styles.upperContainer}>
                <Image source={props.img} style={styles.img} />
                <View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerName}>{props.companyName}</Text>
                        <Text style={styles.headerMin}>({props.orderTime} Min)</Text>
                    </View>
                    <Text style={styles.reviewDetail}>Delivery Fee 25R</Text>
                    <Text style={styles.reviewDetail}>Minimum Order 2</Text>
                    <Text style={styles.openAndCloseTime}>{props.workingTime}</Text>
                    <View style={styles.deliveryAndPickUpMainContainer}>
                        <View style={styles.iconDetailContainer}>
                            <Delivery name='delivery-dining' size={25} color='#f47e26' />
                            <Text style={styles.iconHeading}>Delivery</Text>
                        </View>
                        <View style={styles.iconDetailContainer}>
                            <PickUp name='flag-triangle' size={25} color='#f47e26' />
                            <Text style={styles.iconHeading}>PickUp</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.IconContainer}>
                    <View style={styles.reviewIon}>
                        <Text style={styles.reviewIconText}>{props.rating}</Text>
                    </View>
                </View>
            </View>
            <View>
            </View>
            <View style={styles.lowerContainer}>
                <Text style={styles.lowerContainerText}>*free paper with every meal*</Text>
            </View>
        </View>
</Pressable>
    )
}

const styles = StyleSheet.create({
    companyContainer: {
        height: 180,
        width: '100%',
        backgroundColor: 'white',
        padding: 8,
        marginVertical:5,
      },
      upperContainer: {
        flex: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      lowerContainer: {
        flex: 2,
        color: 'blue',
        justifyContent: 'flex-end'
      },
      img: {
        height: 100,
        width: 100,
      },
      lowerContainerText: {
        color: 'red',
        textAlign: 'center',
        fontSize: 15
      },
      IconContainer: {
       alignSelf: 'flex-start' 
    
      },
      headerContainer: {
        flexDirection: 'row'
      },
      headerName: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
      },
      headerMin: {
        color: '#f47e26',
        paddingLeft: 5,
        fontSize: 18,
        fontWeight: 'bold'
      },
      reviewDetail: {
        color: 'gray',
        fontSize: 18
      },
      openAndCloseTime: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
      },
      reviewIon: {
        backgroundColor: '#f47e26',
        borderRadius: 3,
        height: 25,
        width: 25,
        justifyContent: 'center',
      },
      reviewIconText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15
      },
      deliveryAndPickUpMainContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
      },
      iconHeading:{
        color:'#f47e26',
        fontSize:18
      },
      iconDetailContainer:{
        flexDirection:'row'
      },
      button:{
        opacity:0.5
      }
      
})

export default CompanyDetailComponent;