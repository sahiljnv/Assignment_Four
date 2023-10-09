import {Text, View, Image, SectionList,Pressable } from 'react-native'
import React, { useEffect , useContext,useState, FC} from 'react'
import { COMPANY_DETAILS } from '../../../data/company_detail'
import PickUp from 'react-native-vector-icons/MaterialCommunityIcons';
import MealItemComponent from '../../../components/meal_item_component';
import RatingIconCoponent from '../../../components/rating_icon_component';
import { dataProps,MEAL_DATA } from '../../../data/meals_data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PersonalDetailContextValue, personalDetailCox } from '../../../context_conponents/personal_detail_context';
import { styles } from './style';
import { findDataById } from '../../../utils/utilities';
import { stackAfterOnboardingParamsList } from '../../../navigation/type';



type MealsItemsProps = NativeStackScreenProps<stackAfterOnboardingParamsList, 'MealItems'>

const MealItems: FC<MealsItemsProps> = (props) => {
    const {navigation, route} = props;
    const [selectedMealList, setSelectMealList] = useState<dataProps | null>();
    const useMealRelatedContext = useContext<PersonalDetailContextValue>(personalDetailCox);
    const companyId = route.params.companyId;
    const CompanyDetail = COMPANY_DETAILS.filter((company) => company.id === companyId)[0];
    const [mealItemIds, setMealItemIds] = useState<string[]>([]);

    const handleOrderPressButton = (): void => {
        if(mealItemIds.length === 0){
           console.warn('Please select atlest one meal....');
        }else{
            navigation.navigate("OrderDetailScreen",{
                compName: CompanyDetail.name,
                listOfMealOrder: selectedMealList
            })
        }
    }
    let listOfMealOrder:dataProps|null = []
    useEffect(() => {
        navigation.setOptions({
            title: CompanyDetail.name
        })
        // useMealRelatedContext.ids
        mealItemIds.forEach((id : string) => {

            let item = findDataById(id,MEAL_DATA)
            if (item!= null) {
                listOfMealOrder?.push(item);
            }
                
        })
        setSelectMealList(listOfMealOrder);
    },[navigation,useMealRelatedContext,setMealItemIds,mealItemIds])
    return (
        <View style={styles.mainContainer}>
            <View style={styles.companyDetailContainer}>
                <View style={styles.companyContainer}>
                    <View style={styles.upperContainer}>
                        <Image source={CompanyDetail.img} style={styles.img} />
                        <View>
                            <View style={styles.headerContainer}>
                                <Text style={styles.headerName}>{CompanyDetail.name}</Text>
                                <Text style={styles.headerMin}>({CompanyDetail.orderTiming} Min)</Text>
                            </View>
                            <Text style={styles.reviewDetail}>Delivery Fee 25R</Text>
                            <Text style={styles.reviewDetail}>Minimum Order 2</Text>
                            <Text style={styles.openAndCloseTime}>{CompanyDetail.workingTiming}</Text>
                            <View style={styles.deliveryAndPickUpMainContainer}>

                                <View style={styles.iconDetailContainer}>
                                    <PickUp name='flag-triangle' size={25} color='#f47e26' />
                                    <Text style={styles.iconHeading}>PickUp</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.IconContainer}>
                            <RatingIconCoponent rating={CompanyDetail.rating} backgroundColor='#f47e26' color='white' />
                        </View>
                    </View>
                    <View>
                    </View>
                    <View style={styles.lowerContainer}>
                        <Text style={styles.lowerContainerText}>Test</Text>
                        <RatingIconCoponent rating={CompanyDetail.rating} backgroundColor='green' color='white' />

                        <Text style={styles.lowerContainerText}>Speed</Text>
                        <RatingIconCoponent rating={CompanyDetail.rating} backgroundColor='red' color='white' />

                        <Text style={styles.lowerContainerText}>Price</Text>
                        <RatingIconCoponent rating={CompanyDetail.rating} backgroundColor='#f47e26' color='white' />

                    </View>
                </View>
            </View>
            <View style={styles.mealListCOnatainer}>
                <SectionList

                    sections={MEAL_DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <MealItemComponent img={item.img} mealName={item.name} mealPrice={item.price} mealSubTitle={item.ingredients} rating={item.rating} id={item.id} 
                        setMealItemIds={setMealItemIds} /> // mealItemIds={mealItemIds}
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.mealListTitle}>{title}</Text>
                    )}
                />

            </View>
            <View style={styles.orderContainer}>
                <Pressable style={({ pressed }) => pressed ? styles.orderButton : null} onPress={handleOrderPressButton}>
                    <View style={styles.innerOrderContainer}>
                        <Text style={styles.orderText}>View Order</Text>

                    </View>
                </Pressable>

            </View>

        </View>
    )
}



export default MealItems;