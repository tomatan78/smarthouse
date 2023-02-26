import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage';
import AddRoom from './components/AddRoom';
import Title from './components/Title';
import RoomPage from './components/RoomPage';
import { useState } from 'react';


let roomsArr = [];

function App() {

  const [selectedRoom,setSelectedRoom] = useState([]);

  const addRoom =(name,color,type)=>{
    let newRoom = new Room(name,color,type)
    roomsArr.push(newRoom)
  }

  const selectedRoomFunc=(room)=>{  
    setSelectedRoom(room)
  }
  return (
    <div className="App">
      <Title/>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage arr = {roomsArr} scRoom = {selectedRoomFunc}/>}/>
              <Route path='addroom' element={<AddRoom addRoom = {addRoom}/>}/>
              <Route path='roompage' element={<RoomPage selectedRoom = {selectedRoom}/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


class Room{
  productsArr = [];

  constructor(name,color,type){
    this.roomName = name;
    this.roomColor = color;
    this.roomType = type;
  }

  checkProd(){
    if (this.productsArr > 5) {
      return true;
    }
  }
}


 export class Product{
  status = false;
  constructor(name){
    this.name = name;
  }
  changeStatus(){
    this.status = !this.status;
  }
}
