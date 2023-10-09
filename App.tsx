import React from 'react'
import PersonalDetailContext from './src/context_conponents/personal_detail_context';
import {View} from 'react-native';
import NavigationScreen from './src/navigation/navigation_screen';
export default function App() {
  return (
    <View style={{flex:1}}>
    <PersonalDetailContext>
        <NavigationScreen />
    </PersonalDetailContext>
    </View>
  )
}