import React, { createContext, useState } from 'react'
export const personalDetailCox = createContext();

export default function PersonalDetailContext({ children }) {
  const [number, setNumber] = useState('');
  const [personName, setPersonName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [checkCompliteOnboarding, setCheckCompliteOnbording] = useState(false);
  const [mealItemIds, setMealItemIds] = useState([]);

  const addMeal = (id) => {
      setMealItemIds((currentIds) => [...currentIds, id])
  }
  const removeMeal = (id) => {
      setMealItemIds((currentIds) => currentIds.filter((mealId) => mealId !== id))
  }
  const value = {
    number,
     setNumber,
    personName,
    email,
    address,
    region,
    setPersonName,
    setAddress,
    setEmail,
    setRegion,
    checkCompliteOnboarding,
    setCheckCompliteOnbording,
    country,
    setCountry, 
    ids: mealItemIds,
    addMeal: addMeal,
    removeMeal: removeMeal
  }
  return (
    <personalDetailCox.Provider value={value}>
      {children}
    </personalDetailCox.Provider>
  )
}