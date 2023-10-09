import { ImageSourcePropType} from 'react-native'

type companyProps = {
    
        id: string;
        name: string;
        rating: string;
        img: ImageSourcePropType;
        orderTiming: string;
        workingTiming: string;
}[]

export const COMPANY_DETAILS: companyProps = [
    {
        id: '1',
        name:'Burger King',
        rating:'4.5',
        img: require('../images/burger-king-logo.png'),
        orderTiming: '45',
        workingTiming: '09.00 AM - 11.00 PM'
    },
    {
        id:'2',
        name:'Burger Singh',
        rating:'4.2',
        img: require('../images/burger-singh-logo.png'),
        orderTiming: '45',
        workingTiming: '09.00 AM - 11.00 PM'
    },
    {
        id:'3',
        name:"Dominos",
        rating:'4.6',
        img: require('../images/dominos-pizza-logo.png'),
        orderTiming: '45',
        workingTiming: '09.00 AM - 11.00 PM'
    },
    {
        id:'4',
        name:"McDonald's",
        rating:'4.3',
        img: require('../images/mc-donalds-logo.svg.png'),
        orderTiming: '45',
        workingTiming: '09.00 AM - 11.00 PM'
    },
    {
        id:'5',
        name:"Nando's",
        rating:'4.2',
        img: require('../images/nandos-logo.png'),
        orderTiming: '45',
        workingTiming: '09.00 AM - 11.00 PM'
    }
]