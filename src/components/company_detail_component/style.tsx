import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    companyContainer: {
      height: 180,
      width: '100%',
      backgroundColor: 'white',
      padding: 8,
      marginVertical: 5,
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
      justifyContent: 'flex-end'
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
      alignSelf: 'flex-start'
  
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
      color: 'black',
      fontWeight: 'bold',
      fontSize: 18
    },
    reviewIon: {
      backgroundColor: '#f47e26',
      borderRadius: 3,
      height: 25,
      width: 25,
      justifyContent: 'center',
    },
    reviewIconText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 15
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
    button: {
      opacity: 0.5
    }
  
  })