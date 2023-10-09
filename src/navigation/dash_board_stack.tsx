import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stackAfterOnboardingParamsList } from './type';
import MealItems from '../screens/dash_board_screens/mealItems';
import HomeScreen from '../screens/dash_board_screens/home_screen';
import OrderDetailScreen from '../screens/dash_board_screens/order_detail_screen';
import PlaceOrderScreen from '../screens/dash_board_screens/place_order_screen';
import FinishScreen from '../screens/dash_board_screens/finish_screen';


const StackAfterOnboarding = createNativeStackNavigator<stackAfterOnboardingParamsList>();

const AfterOnboardingScreens = () => {
    return (
        <StackAfterOnboarding.Navigator>
            <StackAfterOnboarding.Screen name="HomeScreen" component={HomeScreen} />
            <StackAfterOnboarding.Screen
                name="MealItems"
                component={MealItems}
                initialParams={{companyId:undefined }}
                options={{

                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#f47e26'
                    }


                }} />
            <StackAfterOnboarding.Screen
                name="OrderDetailScreen"
                component={OrderDetailScreen}

                options={{
                    title: 'Order Details',
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#f47e26'
                    }


                }} />
            <StackAfterOnboarding.Screen
                name="PlaceOrder"
                component={PlaceOrderScreen}

                options={{
                    title: 'Place Order',
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#f47e26'
                    }


                }} />
            <StackAfterOnboarding.Screen
                name="FinishScreen"
                component={FinishScreen}

                options={{
                    title: '#Order No. 50',
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#f47e26'
                    }


                }} />
        </StackAfterOnboarding.Navigator>
    )
}

export default AfterOnboardingScreens