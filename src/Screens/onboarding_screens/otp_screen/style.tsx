import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({
    mainContainer: {
        padding: 13,
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    upperContainer: {
        flex: 3,
    },
    middleContainer: {
        paddingTop: 20,
        flex: 4,
        alignItems: 'center'
    },
    lowerContainer: {
        flex: 5,
        alignItems:'center'
    },
    heading: {

        color: 'black',
        fontSize: 25,
        marginBottom: 25
    },
    message: {
        color: 'black',
        fontSize: 15,
        marginBottom: 10
    },
    numberContainer: {
        flexDirection: 'row'
    },
    phoneNumber: {
        color: 'black'
    },
    worngNumberText: {
        color: 'red',
        paddingLeft: 10,
        textDecorationLine: 'underline'
    },
    middleContainerHeading: {
        color: 'black',
        fontSize: 18
    },
    codeInput: {
        borderWidth: 2,
        borderColor: 'gray',
        width: '60%',
        marginTop: 10,
        paddingHorizontal: 20,
        color: 'black',
        fontSize: 20,
        textAlign: 'center'

    }, InnerButton: {
        backgroundColor: '#f47e26',
        height: 50,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    },
    button: {
        opacity: 0.5,

    },
    outterButton: {
        width: '85%',
        marginVertical:5
    },
    innerButtonForResend:{
        backgroundColor: 'gray',
        height: 50,
        justifyContent: 'center'
    },
})