import { Text, View } from 'react-native'
import React, { FC } from 'react'
import { styles } from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackAfterOnboardingParamsList } from '../../../navigation/type';
type navigationFinishScreenProps = NativeStackScreenProps<stackAfterOnboardingParamsList, 'FinishScreen'>;

const FinishScreen: FC<navigationFinishScreenProps> = (props) => {
  const { navigation } = props;
  const currentDate = new Date();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Order Placed on</Text>
        <Text style={styles.title}>{currentDate.getFullYear() + "/" + currentDate.getMonth() + "/" + currentDate.getDate() + ' At ' + currentDate.getHours() + '.' + currentDate.getMinutes()}</Text>
        <Text style={styles.homeButton} onPress={() => navigation.navigate('HomeScreen')}>go home</Text>
      </View>
    </View>
  )
}

export default FinishScreen;