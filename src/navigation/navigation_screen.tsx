import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { personalDetailCox } from "../context_conponents/personal_detail_context";
import OnboardingStack from "./onboarding_stack";
import AfterOnboardingScreens from './dash_board_stack';
export default function NavigationScreen() {
    const {checkCompliteOnboarding} = useContext(personalDetailCox);
    return (
        <NavigationContainer>
            {
                checkCompliteOnboarding ? <AfterOnboardingScreens /> : <OnboardingStack />
            }
        </NavigationContainer>
    )

}


