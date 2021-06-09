import React, { useRef,useContext, useEffect, useState } from 'react';
import Banner from '../Body/Hero/Parts/Banner';
import Button from '../Body/Hero/Parts/Button';
import Hero from '../Body/Hero/Hero';
import {RoomContext} from './../Context/context';
import RoomContainer from '../Context/RoomContainer';


const Rooms = () =>{
    const Element1 = useRef("")
   const roomContext = useContext(RoomContext)
//    console.log(roomContext)
   const [room , setRoom] = useState(roomContext.room)
//    console.log(room)

    return (
        <>
        <Hero hero={"roomsHero"} >
            <Banner title="Our Rooms">
                <Button pa="./">Return Home</Button>
            </Banner>
        </Hero>
        
        <RoomContainer />
        
        {/* <Title>Rooms</Title>
        <div className={classes.Rooms_Container}>
            {rooms}
        </div> */}
        </>
    );
}

export default Rooms;