import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './room.css'

export default function HomePage(props) {

  const nev = useNavigate();

  const newPage=(room)=>{
    props.scRoom(room)
    nev(`/roompage`)
  }

  return (
      <div>
        <Link to={'/addroom'}><button id='addBtn'><div id='plus'>+</div></button></Link>
        <div className='roomDiv'>
        {props.arr.map((val)=>{
         return <div className='eachRoom' onClick={()=>{newPage(val)}} style={{backgroundColor:val.roomColor}}>
          <h1 id='name'>{val.roomName}</h1>
          </div>      
      })}
      </div>
    </div>
  )
}
