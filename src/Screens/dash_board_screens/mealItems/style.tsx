import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    // lowerContainerText: {
    //     color: 'black',
    //     fontSize: 18,
    //     marginHorizontal: 5
    // },
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
        width:'100%', 
        justifyContent:'center',
        backgroundColor: '#f47e26'
    }


})