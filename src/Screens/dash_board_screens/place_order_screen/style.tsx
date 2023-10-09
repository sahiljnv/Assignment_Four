import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    headerContainer: {
        flex: 1.5,
    },
    detailContainer: {
        flex: 10,
        marginHorizontal: 25
    },
    buttonContainer: {
        flex: 0.9,
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

    },
    headerTitle: {
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    warningContainer: {
        backgroundColor: '#f8f8f8',
        paddingVertical: 5,
        margin: 10,
        paddingLeft: 10,
        borderRadius: 10
    },
    warningText: {
        color: 'red'
    },
    personlInfo: {
        borderColor: 'gray',
        borderBottomWidth: 2,
        color: 'black'
    },
    detailTitle: {
        color: 'black',
        fontSize: 20,
        paddingVertical: 15,
        fontWeight: 'bold'
    },
    addressComponen: {
        width: '100%',
        height: 100,

    },
    address: {
        color: 'gray',
        height: 60,
        borderColor: 'gray',
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: 10
    },

    innerOnChangeAddress: {
        backgroundColor: '#f47e26',
        height: 40,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'center'
    },
    changeAddressButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    checkBoxContainer: {
        flexDirection: 'row',
        marginTop:5
    },
    checkBoxTitle: {
        color: 'gray',
        fontSize: 15,
        paddingLeft: 10
    },
    PriceContainer: {
        paddingTop: 10,
        paddingBottom: 18,
        borderBottomWidth: 2,
        borderColor: 'gray',

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
    radioButton: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#f47e26'
    }

})