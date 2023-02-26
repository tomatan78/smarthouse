import React, { useState } from 'react'
import { Product } from '../App';
import Products from './Products'
import AddProduct from './AddProduct';
import './roomPage.css'
import {Link} from 'react-router-dom'

export default function RoomPage(props) {

const [flag,setFlag] = useState(false);


const changeProStatus=(ind)=>{
  props.selectedRoom.productsArr[ind].changeStatus();
}


const addProduct = (name)=>{
  let newProduct = new Product(name)
  let room = props.selectedRoom;
  let stereo = room.productsArr.find((val)=>{
    return val.name == 'Stereo System';
  })
  if(stereo && name == 'Stereo System'){
    alert('Error')
    return;
  }
  if(newProduct.name == 'Boiler' && room.roomType != 'Shower'){
    alert('Error')
    return;
  }
  if(room.productsArr.length == 5){
    alert('Error')
    return;
  }
  room.productsArr.push(newProduct)
}

const showAdd=()=>{
    if(flag == true){
      return <AddProduct add = {addProduct} setFlag = {setFlag}/>
    }
  }
  return (
    <div>
      <div id='roomPageDiv'>
        <h2>{`Room Owner:  ${props.selectedRoom.roomName}`}</h2>
        <h2>{`Room Type:  ${props.selectedRoom.roomType}`}</h2>
        <div>
        {props.selectedRoom.productsArr.map((val,ind)=>{
          return <Products change = {changeProStatus}  pro = {val} ind = {ind}/>
        })}
        </div>
        <div id='divFooter'>
        <button id='addProductBtn' onClick={()=>{setFlag(true)}}><div>Add Product</div></button>
        {showAdd()}
        </div>
        <Link to={'/'}><button id='homeBtn'>Back to home page</button></Link>
        </div>
    </div>
  )
}

