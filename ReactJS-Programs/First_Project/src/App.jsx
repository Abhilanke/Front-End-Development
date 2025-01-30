import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './Mycomponent';
import Massage from './Massage';
import { Mybutton, Mybutton1, Mybutton2 } from './Mybutton';

function App() {
  
  //return <Mycomponent></Mycomponent>;
 //return <Massage></Massage>
 return (

  <>
  <Mybutton></Mybutton>
  <Mybutton1></Mybutton1>
  <Mybutton2></Mybutton2>
  </>
 );

      
}

export default App
