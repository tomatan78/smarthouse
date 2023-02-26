import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './addRoom.css';

export default function AddRoom(props) {

    const [name,setName] = useState('');
    const [type,setType] = useState('');
    const [color,setColor] = useState('');

    const validation =()=>{
        if(name.length > 5 || name.length < 1){
            alert('ERROR!')
            return
        }
        if(type == null){
            alert('ERROR!')
            return;
        }
        if(color == null){
            alert('ERROR!')
            return;
        }
        else{
            props.addRoom(name,color,type)
        }
    }
  return (
    <div>
        <select onChange={(e)=>{setType(e.target.value)}} name="Room Select" id="selectElement">
            <option value='' disabled selected hidden>Choose a Room:</option>
            <option value='Bedroom'>Bedroom</option>  
            <option value='Shower'>Shower</option>
            <option value='Kitchen'>Kitchen</option>
        </select>
        <br /><br />
        <input id='inputElement' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter Room Name' />
        <p id='chooseRC'>Choose Room Color:</p>
        <input onChange={(e)=>{setColor(e.target.value)}} type="color" />
        <br /><br />
        <Link to={'/'}><button onClick={validation} id='addBtn'><div id='CR'>Create Room</div></button></Link>
    </div>
  )
}
