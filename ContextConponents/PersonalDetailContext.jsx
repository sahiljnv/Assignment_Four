import React, { createContext, useState } from 'react'
export const personalDetailCox = createContext();

export default function PersonalDetailContext({ children }) {
  const [number, setNumber] = useState('');
  const [personName, setPersonName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('address');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [checkCompliteOnboarding, setCheckCompliteOnbording] = useState(false);
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
    setCountry
    
  }
  return (
    <personalDetailCox.Provider value={value}>
      {children}
    </personalDetailCox.Provider>
  )
}