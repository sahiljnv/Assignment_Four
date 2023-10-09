import { Text, View, Image, Pressable ,ImageSourcePropType} from 'react-native'
import React from 'react'
import Delivery from 'react-native-vector-icons/MaterialIcons';
import PickUp from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
type navigationHomeScreenProps = NativeStackScreenProps<stackAfterOnboardingParamsList, 'HomeScreen'>;

import { styles } from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackAfterOnboardingParamsList } from '../../navigation/type';
type companyContainerProps = {
  img: ImageSourcePropType,
  companyName: string,
  orderTime: string,
  workingTime: string,
  rating:string,
  id:string
}
type HomeScreenNavigationProp = navigationHomeScreenProps['navigation'];

const CompanyDetailComponent = (props: companyContainerProps) => {
  const { img, companyName, orderTime, workingTime, rating, id} = props
  const navigation: HomeScreenNavigationProp= useNavigation();

  const onPressHandler = () => {
    navigation.navigate('MealItems', {
      companyId: id
    })
  }
  return (
    <Pressable style={({ pressed }) => pressed ? styles.button : null} onPress={onPressHandler}>
      <View style={styles.companyContainer}>
        <View style={styles.upperContainer}>
          <Image source={img} style={styles.img} />
          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerName}>{companyName}</Text>
              <Text style={styles.headerMin}>({orderTime} Min)</Text>
            </View>
            <Text style={styles.reviewDetail}>Delivery Fee 25R</Text>
            <Text style={styles.reviewDetail}>Minimum Order 2</Text>
            <Text style={styles.openAndCloseTime}>{workingTime}</Text>
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
              <Text style={styles.reviewIconText}>{rating}</Text>
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



export default CompanyDetailComponent;