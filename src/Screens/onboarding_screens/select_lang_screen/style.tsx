import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    IconContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    setLagContainer: {
        flex: 4,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    buttonContainer: {
        flex: 4,
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
    inputLabel: {
        color: 'black',
        fontSize: 22,

    },
    setLangContainer: {
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 30,
        color: 'black',
        paddingHorizontal: 10,
        height: 60,
        justifyContent: 'center'

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
    },
    language: {
        color: 'black',
        fontSize: 25
    },
    centeredView: {
        flex: 1,
        marginTop: 22,
        alignItems:'center'
    },
    modalTitle: {
        color: 'black',
        fontSize: 30,
        paddingBottom:20
    },
    langName:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    },
    langContainer:{
        backgroundColor:'gray',
        padding:10,
        margin:5,
        width:"50%"
    }
})