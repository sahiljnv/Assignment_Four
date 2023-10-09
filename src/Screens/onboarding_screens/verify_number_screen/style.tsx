import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    IconContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    setLagContainer: {
        flex: 4,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    buttonContainer: {
        flex: 4,
        alignItems: 'center',
        paddingTop: 25
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
    inputLabel: {
        color: 'black',
        fontSize: 22,
        paddingBottom: 20

    },
    inputText: {
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
        color: 'black',
        paddingHorizontal: 15
    },
    InnerButton: {
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
        marginTop: 10
    },
    countryNameContainer: {
        height: 55,
        borderWidth: 2,
        borderColor: "black",
        justifyContent: 'center',
        paddingLeft: 15
    },
    countryTextName: {
        color: 'black',
        fontSize: 20
    },
    centeredView: {
        flex: 1,
        marginTop: 22,
        alignItems: 'center'
    },
    modalTitle: {
        color: 'black',
        fontSize: 30,
        paddingBottom: 20
    },
    CountryName: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',

    },
    CountryButton: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 5,
        width: "90%"
    },
    countryContainer: {
        alignItems: 'center'
    }
})