import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stackOnboardingParamsList } from './type';
import SelectLagScreen from '../screens/onboarding_screens/select_lang_screen';
import VerifyNumberScreen from '../screens/onboarding_screens/verify_number_screen';
import OtpScreen from '../screens/onboarding_screens/otp_screen';
import PersonalDetailScreen from '../screens/onboarding_screens/personal_detail_screen';



const onboardingStack = createNativeStackNavigator<stackOnboardingParamsList>();
const OnboardingStack = () => {
    return (
        <onboardingStack.Navigator>
            <onboardingStack.Screen name="SelectLag" component={SelectLagScreen} options={{ headerShown: false }} />
            <onboardingStack.Screen name="VerifyNum" component={VerifyNumberScreen} options={{ title: '' }} />
            <onboardingStack.Screen name="OptScreen" component={OtpScreen} options={{ title: '' }} />
            <onboardingStack.Screen name="PersonalDetail" component={PersonalDetailScreen} options={{ title: '' }} />
        </onboardingStack.Navigator>
    )
}

export default OnboardingStack