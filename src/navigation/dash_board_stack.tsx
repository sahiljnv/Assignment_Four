import React from 'react'
import MealItems from "../Screens/dash_board_screens/mealItems";
import OrderDetailScreen from "../Screens/dash_board_screens/order_detail_screen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlaceOrderScreen from "../Screens/dash_board_screens/place_order_screen";
import FinishScreen from "../Screens/dash_board_screens/finish_screen";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { dataProps } from "../Data/Meal_Data";
import HomeScreen from '../Screens/dash_board_screens/home_screen';

export type stackAfterOnboardingParamsList = {
    HomeScreen : undefined,
    MealItems : { companyId: String},
    OrderDetailScreen: {compName:string, listOfMealOrder:dataProps | undefined|null},
    PlaceOrder : undefined
    FinishScreen : undefined
}

const StackAfterOnboarding = createNativeStackNavigator<stackAfterOnboardingParamsList>();
export type navigationMealItemsScreenProps = NativeStackScreenProps<stackAfterOnboardingParamsList, 'MealItems','StackAfterOnboarding'>;
export type navigationHomeScreenProps = NativeStackScreenProps<stackAfterOnboardingParamsList, 'HomeScreen','StackAfterOnboarding'>;
export type navigationOrderDetailScreenProps = NativeStackScreenProps<stackAfterOnboardingParamsList, 'OrderDetailScreen','StackAfterOnboarding'>;
export type navigationPlaceOrderScreenProps = NativeStackScreenProps<stackAfterOnboardingParamsList, 'PlaceOrder','StackAfterOnboarding'>;
export type navigationFinishScreenProps = NativeStackScreenProps<stackAfterOnboardingParamsList, 'FinishScreen','StackAfterOnboarding'>;

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