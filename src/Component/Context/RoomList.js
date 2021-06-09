import React, { useEffect, useState } from 'react';
import Title from '../Body/Services/Title'
import classes from './RoomList.module.css'
import Room from '../SingleRoom/Room'

function RoomList({rooms}) {
    if(rooms.length === 0){
        return(
            <h1>Sorry no room available</h1>
        )
    }

    const [room,setRoom] = useState([]);
    useEffect(()=>{
        setRoom(rooms.map((room)=>{
            return <Room key={room.id} room={room} /> 
        }))
    },[rooms]);
  

    return (
        <div>
            {/* <Title>Rooms</Title> */}
            <div className={classes.Rooms_Container}>
                {room}
            </div> 
            
        </div>
    );
}


export default RoomList;