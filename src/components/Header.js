import React, { useState } from 'react'
import {PhonesData} from './PhonesData'
import {Button,Table,Card,Accordion,Navbar,Nav,Container} from 'react-bootstrap';

const Header = () => {

  const [items,setItems]=useState(PhonesData)

  const decrease =(id)=>{
    const NewItem=items.map((item)=>
    item.id === id && item.qty>1 ?{...item,qty : item.qty-1}:item
    )
    setItems(NewItem)
  }

  const increase=(id)=>{
    const NewItem=items.map((item)=>
    item.id === id && item.qty<10 ?{...item,qty:item.qty+1}:item
    )
    setItems(NewItem)
  }

  return (
    
    <div>
      <h1>Products</h1>
      {items.map((item)=>(
        <div key={item.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`./asset/${item.image}.webp`)} />
        <Card.Body>
          <Card.Title>{item.model}</Card.Title>
          <Card.Text>
            <h3>{item.des}</h3>
            <h2>price :{item.price}</h2>
            <p>
              Quantity:<Button onClick={()=>decrease(item.id)}>-</Button>{item.qty}<Button onClick={()=>increase(item.id)}>+</Button>
            </p>
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
      </div>
      ))}
      
    </div>
  )
}

export default Header