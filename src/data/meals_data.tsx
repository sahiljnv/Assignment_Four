
export type dataProps = {
    id: string;
    name: string;
    ingredients: string;
    rating: string;
    price: number;
    img: any;
}[];
export type mealDataProps = {
    title: string;
    data: dataProps
}[]

export const MEAL_DATA: mealDataProps = [

    {
        title: 'Wrap',
        data: [{
            id:'1',
            name: 'Cheese Wrap',
            ingredients: 'spicy paneer,onion,capsicum',
            rating: '4.5',
            price: 90,
            img:require('../images/meals_images/cheese-wrap.jpg')
        },
        {
            id:'2',
            name: 'Chicken Wrap',
            ingredients: 'Flat Parantha bread layered with spicy chicken tossed in special sauces',
            rating: '4.5',
            price: 99,
            img: require('../images/meals_images/chicken-garlic-wrap.jpg')
        },
        {
            id:'3',
            name: 'Chicken Garlic Wrap',
            ingredients: 'Chicken garlic prepared in garlic mixture and tossed on griller to melt in your mouth',
            rating: '4',
            price: 185,
            img:require('../images/meals_images/chicken-wrap.jpg')
        }
        ]
    },
    {
        title:'Burger',
        data:[{
            id:'4',
            name:'Paneer Burger',
            ingredients:'Heaven in a freshly baked bun, this burger has a melt in your mouth paneer patty served with onions',
            rating:'4.5',
            price:220,
            img:require('../images/meals_images/paneer-burger.jpg')
        },
        {
            id:'5',
            name:'Cheese Burger',
            ingredients:'Patity of your choice double cheese, crispy bacon, served with mayo',
            rating:'4.2',
            price:140,
            img:require('../images/meals_vv  images/mutto-bacon-cheese-burger.jpg')
        },
        {
            id:'6',
            name:'Deluxe Burger',
            ingredients:'Onion, tomato and herb patty',
            rating:'4',
            price:80,
            img:require('../images/meals_images/deluxe-burger.jpg')
        }
    ]
    }


]