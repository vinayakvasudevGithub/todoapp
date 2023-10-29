import React, { useState } from 'react'
import {Button,Table,Card,Accordion,Navbar,Nav,Container} from 'react-bootstrap';

const Header = () => {
    const [counter,setCounter]=useState(0)
  return (

    <div>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+7)}>count+</button>
    </div>
  )
}

export default Header