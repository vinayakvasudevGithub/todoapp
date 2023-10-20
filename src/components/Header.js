import React, { useState } from 'react'
import {Button,Table,Card,Accordion,Navbar,Nav,Container} from 'react-bootstrap';

const products=[
  {id:1,name:"laptop",brand:"hp",qty:1},
  {id:2,name:"laptop",brand:"dell",qty:1},
  {id:3,name:"laptop",brand:"apple",qty:1}
]

const Header = () => {
  const [items,setItem]=useState(products)

  const ChangeQuantity =(id)=>{
  const NewItem=items.map((item)=>
    item.id===id?{...item,qty:item.qty+1}:item
  )
  setItem(NewItem)
  }
  return (
    <div>
      {items.map((product)=>(
        <div  key={product.id}>
          <h1>{product.name}</h1>
          <h3>brand : {product.brand}</h3>
          <h4>qty : {product.qty}</h4>
          <button onClick={()=>ChangeQuantity(product.id)}>+</button>
        </div>
      ))}
    </div>
  )
}

export default Header