import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainComponent: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',

    },
    companyTitle: {
        color: "black",
        fontSize: 20,

    },
    titleContainer: {
        flex: 0.9,
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: 'gray',
        justifyContent: 'center',
        marginHorizontal: 25

    },
    orderList: {
        flex: 10,
        marginBottom:10
    },
    placeOrder: {
        flex: 1,
    },
    orderButton: {
        opacity: 0.5
    },
    innerOrderContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#f47e26'
    },
    orderText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'

    }, mealOrderComponent: {
        paddingTop: 10,
    },
    mealPrice: {
        color: '#f47e26',
        fontSize: 18,
        fontWeight: 'bold'
    },
    mealName: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    headingMealOrderComponent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subHeading: {
        color: 'gray',
        width: '40%',
        fontSize: 15,
        textAlign: 'left'
    },
    showAllSelectetItem: {
        borderBottomWidth: 2,
        borderColor: 'gray',
        marginHorizontal: 25,
        paddingBottom: 30
    },
    PriceContainer:{ 
        paddingTop: 10,
        paddingBottom:30,
        borderBottomWidth:2,
        borderColor:'gray',
        marginHorizontal:25
    }
    


})
