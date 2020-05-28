import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Switch from './component/Switch/Switch'
import ConditionalR from './component/ConditionalR/ConditionalR'

function App() {

  const [isOn,isOnSet]=useState(true)

  const clickCheckbox = (isOn)=>{

    isOnSet(isOn)
    console.log(new Date(),`App.js`)
    console.table(isOn)
}

  return (
    <React.Fragment>
      
      <Switch clickCheckboxP={clickCheckbox}/>

      <ConditionalR isOn={isOn}/>

    </React.Fragment>
  );
}

export default App;
