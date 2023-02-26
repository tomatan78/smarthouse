import React from 'react'
import { useState } from 'react'
import './products.css'

export default function Products(props) {

  const[status,setStatus] = useState(props.pro.status)

  let color = status ? 'green' : 'red';

  const changeColor = ()=>{
    props.change(props.ind);
    setStatus(!status)
  }

  return (
    <div>
        <h3 id='product' onClick={()=>{changeColor()}} style={{backgroundColor:color}}>{props.pro.name}</h3>
    </div>
  )
}
