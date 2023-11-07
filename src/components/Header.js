import React, { useState, useEffect } from 'react'
import {Button,Table,Card,Accordion,Navbar,Nav,Container} from 'react-bootstrap';

const Header = () => {

  const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts.splice(0,10)))
  })

  return (
    <div>
      <h1>fetch Appi data</h1>
      {posts.map((post)=>
      <div key={post.id}>
        {/* 06/10 */}
        <h1>{post.title}</h1> 
        <p>{post.body}</p>  
        </div>     
      )}
    </div>
  )
}

export default Header