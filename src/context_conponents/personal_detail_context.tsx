import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';

 export type PersonalDetailContextValue = {
  number: string;
  setNumber: Dispatch<SetStateAction<string>>;
  personName: string;
  setPersonName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
  checkCompliteOnboarding: boolean;
  setCheckCompliteOnboarding: Dispatch<SetStateAction<boolean>>;
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  
};

export const personalDetailCox = createContext<PersonalDetailContextValue>({
  number: '',
  setNumber: () => {},
  personName: '',
  setPersonName: () => {},
  email: '',
  setEmail: () => {},
  address: 'address',
  setAddress: () => {},
  region: '',
  setRegion: () => {},
  checkCompliteOnboarding: false,
  setCheckCompliteOnboarding: () => {},
  country: 'Select Country...',
  setCountry: () => {},
});

type PersonalDetailContextProps = {
  children: ReactNode;
};

export default function PersonalDetailContext({ children,}: PersonalDetailContextProps) {
  const [number, setNumber] = useState<string>('');
  const [personName, setPersonName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('address');
  const [region, setRegion] = useState<string>('');
  const [country, setCountry] = useState<string>('Select Country...');
  const [checkCompliteOnboarding, setCheckCompliteOnboarding] = useState<boolean>(false);

  const value: PersonalDetailContextValue = {
    number,
    setNumber,
    personName,
    setPersonName,
    email,
    setEmail,
    address,
    setAddress,
    region,
    setRegion,
    checkCompliteOnboarding,
    setCheckCompliteOnboarding,
    country,
    setCountry,
  };

  return (
    <View style={{ flex: 1 }}>
      <personalDetailCox.Provider value={value}>
        {children}
      </personalDetailCox.Provider>
    </View>
  );
}
