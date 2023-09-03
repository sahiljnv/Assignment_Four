import React, { createContext, useState } from 'react'
export const addRemoveContext = createContext();
const AddAndRemoveMealInCrat = ({children}) => {
    const [mealItemIds, setMealItemIds] = useState([]);

    const addMeal = (id) => {
        setMealItemIds((currentIds) => [...currentIds, id])
    }
    const removeMeal = (id) => {
        setMealItemIds((currentIds) => currentIds.filter((mealId) => mealId !== id))
    }
    const value = {
        ids: mealItemIds,
        addMeal: addMeal,
        removeMeal: removeMeal
    }

    return (
        <addRemoveContext.Provider value={value}>{children}</addRemoveContext.Provider>
    )
}

export default AddAndRemoveMealInCrat;