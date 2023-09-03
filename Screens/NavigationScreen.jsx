import SelectLagScreen from "./OnboardingScreens/SelectLagScreen";
import VerifyNumberScreen from "./OnboardingScreens/VerifyNumberScreen";
import OtpScreen from "./OnboardingScreens/OtpScreen";
import PersonalDetailScreen from "./OnboardingScreens/PersonalDetailScreen";
import HomeScreen from "./AfterOnboardingScreens/HomeScreen";
import MealItems from "./AfterOnboardingScreens/MealItems";
import OrderDetailScreen from "./AfterOnboardingScreens/OrderDetailScreen";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { personalDetailCox } from "../ContextConponents/PersonalDetailContext";
import {useContext} from 'react';
const Stack = createNativeStackNavigator();
export default function NavigationScreen() {
    const useAppContext = useContext(personalDetailCox);
    return (
        <NavigationContainer>
           
               
                {
                    useAppContext.checkCompliteOnboarding ? <OnboardingStack />:<AfterOnboardingScreens />
            
                 }

        </NavigationContainer>
    )

}

const OnboardingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SelectLag" component={SelectLagScreen} options={{ headerShown: false }} />
            <Stack.Screen name="VerifyNum" component={VerifyNumberScreen} options={{ title: '' }} />
            <Stack.Screen name="OptScreen" component={OtpScreen} options={{ title: '' }} />
            <Stack.Screen name="PersonalDetail" component={PersonalDetailScreen} options={{ title: '' }} />
        </Stack.Navigator>
    )
}
const AfterOnboardingScreens = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen 
        name="MealItems" 
        component={MealItems} 

        options={{
            
            headerTintColor:'white',
            headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'#f47e26'
            }
            

        }} />
         <Stack.Screen 
        name="OrderDetailScreen" 
        component={OrderDetailScreen} 

        options={{
            title:'Order Details',
            headerTintColor:'white',
            headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'#f47e26'
            }
            

        }} />

    </Stack.Navigator>
    )
   

}