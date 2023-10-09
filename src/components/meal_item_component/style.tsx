import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    mealItemContainer: {
        width:364,// this is the error
        backgroundColor: '',
        marginVertical:5
    },
    itemButton: {
        opacity: 0.5
    },
    innermealItemCOntainer: {
        height: 150,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center'
    },
    itemImage: {
        flex: 2
    },
    itemDetail: {
        flex: 4
    },
    itemAddIconAndRating: {
        flex: 1,
        alignItems: 'flex-end',
        height: 120,
        justifyContent: 'space-between'
    },
    mealImg: {
        height: 80,
        width: 80,
        borderRadius: 10
    },
    mealName: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    mealPrice: {
        color: '#f47e26',
        fontSize: 18,
        fontWeight: 'bold'
    },
    mealNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mealSubTitle: {
        color: 'black'
    }

})
