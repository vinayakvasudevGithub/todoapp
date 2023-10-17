import React from 'react'
import {Button,Table,Card,Accordion,Navbar,Nav,Container} from 'react-bootstrap';

const Header = () => {

  let colour='blue'

  const change=()=>{
    colour='red'
    console.log(colour)
  }

  return (
    <div>
      <h1>my fav color is {colour}</h1>
      <Button onClick={change}>change color</Button>
    </div>
  )
}

export default Header