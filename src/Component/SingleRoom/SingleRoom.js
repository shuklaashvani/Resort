import classes from './SingleRoom.module.css';
import React, { useEffect, useState, useContext } from "react";
import Banner from "../Body/Hero/Parts/Banner";
import Button from "../Body/Hero/Parts/Button";
import { RoomContext } from "../Context/context";
import StyledHero from "./StyledHero";


const SingleRoom = (props) => {
  const roomContext = useContext(RoomContext);
  const [slug, setSlug] = useState(props.match.params.slug);
  const [room, setRoom] = useState(roomContext.getRoom(slug));

  if (!room) {
    return (
      <div>
        <h3> no such room could be found...</h3>
        <Button pa="/rooms">back to rooms</Button>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

console.log(extras)
  return (
    <>

      <StyledHero img = {images[0]}>
      <Banner title={slug} subtitle="">
        <Button pa="/Rooms">BACK TO ROOMS</Button>
      </Banner>
      </StyledHero>
          <div className={classes.imgContainer}>
              {images.map((img1)=> <div>
                <img src ={img1} />
                  </div>)
              }
         </div>

         <div className={classes.detContainer}>
           <div className={classes.detail}>
             <h1>Detail</h1>
             <p>{description}</p>
           </div>

           <div className={classes.info}>
             <h1>Info</h1>
             <p> Price : {price}</p>
             <p> Size : {size}</p>
             <p> Capicity : {capacity}</p>
             <p>{pets ?'': 'No'} Pets allowed</p>
           </div>
          
         </div>

           <div className={classes.Extras}>
                <h1>Extras</h1>
                <div className={classes.extr}>
                  {extras.map((extra)=> <p>- {extra}</p>)}
                </div>
           </div>



    </>
  );
};

export default SingleRoom;
