import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    upperContainer: {
        flex: 3,
    },
    middleContainer: {
        flex: 8,
        paddingHorizontal: 15
    },
    lowerContainer: {
        flex: 1,
        backgroundColor: '#f47e26',
        justifyContent: 'center',
        alignItems: 'center'
    }, IconContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    img: {
        width: '40%',
        height: '50%'
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    label: {
        color: 'black',
        fontSize: 20
    },
    inputText: {
        borderWidth: 2,
        borderColor: 'gray',
        marginVertical: 10,
        color: 'black',
        paddingHorizontal: 10,    
    },
    buttonTitle: {
        color: 'white',
        fontSize: 20
    },
    iconContainer: {
        position: 'absolute',
        right: 15
    },
})