import React, { useState } from 'react'
import {Button,Table,Card,Accordion,Navbar,Nav,Container} from 'react-bootstrap';

const Header = ({states}) => {

  return (
    <div >
      {states.map((state)=>(
        <div className='bg-warning'>
        <h1>{state.name}</h1>
        <h4>lang : {state.language}</h4>
        <h4>population : {state.population}</h4>
        </div>
      ))}     
    </div>
  )
}

export default Header