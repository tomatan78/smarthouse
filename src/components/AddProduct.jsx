import React from 'react'
import { useState } from 'react'
import './addProduct.css'

export default function AddProduct(props) {

  const [productName,setProduct] = useState();

  const addd=()=>{
    if (productName == null) {
      alert('Error')
      return
    }
    props.add(productName)
    props.setFlag(false);
  }

  return (
    <div>
        <select onChange={(e)=>{setProduct(e.target.value)}} name="Room Select" className="addSelectproduct">
            <option id='' value='' disabled selected hidden>Choose Product:</option>
            <option value='Air Conditioner'>Air Conditioner</option>
            <option value='Boiler'>Boiler</option>
            <option value='Stereo System'>Stereo System</option>
            <option value='Lamp'>Lamp</option>
        </select>
        <button className="addSelectproduct" onClick={addd}>Add Product</button>
    </div>
  )
}
