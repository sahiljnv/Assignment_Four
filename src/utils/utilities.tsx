import { mealDataProps } from "../data/meals_data";

export const addMeal = (id:string) => {
    return ((currentIds: string[]) => [...currentIds, id])
}
export const removeMeal = (id : string) => {
    return ((currentIds : string[]) => currentIds.filter((mealId : string) => mealId !== id))
}

export function findDataById(idToFind:String,MealData:mealDataProps )  {
    for (const category of MealData) {
        const foundData = category.data.find(item => item.id === idToFind);
        if (foundData) {
            return foundData;
        }
    }
     return null; // Return null if ID is not found
}

export function isNumberOrPluseSign(chr: string): boolean { return '1234567890+'.indexOf(chr[0]) !== -1 }

export function checkNumber(number: string): boolean {
    let checkBool = true;
    for (let i = 0; i < number.length; i++) {
        if (isNumberOrPluseSign(number.charAt(i)) === false) {
            return checkBool = false;
        }

    }
    return checkBool;
}