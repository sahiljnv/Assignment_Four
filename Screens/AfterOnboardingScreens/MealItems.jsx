import { StyleSheet, Text, View, Image, SectionList,Pressable } from 'react-native'
import React, { useEffect , useContext,useState} from 'react'
import { Company_Detail } from '../../Data/Company-Detail'
import PickUp from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MealItemComponent from './MealItemComponent';
import RatingIconCoponent from './RatingIconCoponent';
import { MealData } from '../../Data/Meal_Data';
import { personalDetailCox } from '../../ContextConponents/PersonalDetailContext';

function findDataById(idToFind) {
    for (const category of MealData) {
        const foundData = category.data.find(item => item.id === idToFind);
        if (foundData) {
            return foundData;
        }
    }
    return null; // Return null if ID is not found
}

const MealItems = ({ route, navigation }) => {
    const [selectedMealList, setSelectMealList] = useState([]);

    const useMealRelatedContext = useContext(personalDetailCox);
    const companyId = route.params.companyId;
    const CompanyDetail = Company_Detail.filter((company) => company.id === companyId)[0];
    const [mealItemIds, setMealItemIds] = useState([]);

    let listOfMealOrder = [];

    const handleOrderPressButton = ()=>{
        if(mealItemIds.length === 0){
           console.warn('Please select atlest one meal....');
        }else{
            navigation.navigate("OrderDetailScreen",{
                compName: CompanyDetail.name,
                listOfMealOrder: selectedMealList
            })
        }
       
    }
    useEffect(() => {
        navigation.setOptions({
            title: CompanyDetail.name
        })
        useMealRelatedContext.ids
        mealItemIds.forEach((id) => {
            listOfMealOrder = [...listOfMealOrder, findDataById(id)]    
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

                    sections={MealData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <MealItemComponent img={item.img} mealName={item.name} mealPrice={item.price} mealSubTitle={item.ingredients} rating={item.rating} id={item.id} setMealItemIds={setMealItemIds} mealItemIds={mealItemIds} />
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

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ececec'
    },
    companyDetailContainer: {
        flex: 3.2,
    },
    mealListCOnatainer: {
        flex: 9,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    orderContainer: {
        flex: 1,  

    }
    ,
    companyContainer: {
        height: 180,
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 5,
        paddingHorizontal: 20,
        paddingVertical: 8
    },
    upperContainer: {
        flex: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    lowerContainer: {
        flex: 2,
        color: 'blue',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    img: {
        height: 100,
        width: 100,
    },
    lowerContainerText: {
        color: 'red',
        textAlign: 'center',
        fontSize: 15
    },
    IconContainer: {
        alignSelf: 'flex-start',
        

    },
    headerContainer: {
        flexDirection: 'row'
    },
    headerName: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    headerMin: {
        color: '#f47e26',
        paddingLeft: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    reviewDetail: {
        color: 'gray',
        fontSize: 18
    },
    openAndCloseTime: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18
    },
    deliveryAndPickUpMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconHeading: {
        color: '#f47e26',
        fontSize: 18
    },
    iconDetailContainer: {
        flexDirection: 'row'
    },
    lowerContainerText: {
        color: 'black',
        fontSize: 18,
        marginHorizontal: 5
    },
    mealListTitle: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5
    },
    orderText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'

    },
    orderButton: {
        opacity: 0.5
    },
    innerOrderContainer:{
        height:'100%',
        width:'100', 
        justifyContent:'center',
        backgroundColor: '#f47e26'
    }


})

export default MealItems;