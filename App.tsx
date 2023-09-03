import React from 'react'
import NavigationScreen from './Screens/NavigationScreen';
import PersonalDetailContext from './ContextConponents/PersonalDetailContext';
export default function App() {
  return (
    <PersonalDetailContext>
        <NavigationScreen />
    </PersonalDetailContext>
  )
}