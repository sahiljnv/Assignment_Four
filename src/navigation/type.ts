import { dataProps } from "../data/meals_data";

export type stackAfterOnboardingParamsList = {
    HomeScreen : undefined,
    MealItems : { companyId: String},
    OrderDetailScreen: {compName:string, listOfMealOrder:dataProps | undefined|null},
    PlaceOrder : {sumOfAllSelectedItem:number}
    FinishScreen : undefined
}

export type stackOnboardingParamsList = {
    SelectLag :undefined,
    VerifyNum : undefined,
    OptScreen: undefined,
    PersonalDetail : undefined
}