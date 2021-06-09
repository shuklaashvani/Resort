import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Room.module.css'
import PropType from 'prop-types'

const Room = ({room}) =>{
    const {name,slug,images,price} = room
    return(
    <article>
        <div className={classes.img_container}>
           <img src={images[0]} alt="single"/>
          
           <div className={classes.prc_top}>
               <h5>${price}</h5>
               <p>per night</p>
           </div>
         
           <Link to={`/Rooms/${slug}`} className={classes.FeatureBtn}>
             Feature
           </Link>
        </div>      
        <div className={classes.name}>
            {name}
        </div>
    </article>
    
    )
}

export default Room;

Room:PropType.shape = {
    name:PropType.string.isRequired,
    slug:PropType.string.isRequired,
    images:PropType.arrayOf(PropType.string).isRequired,
    price:PropType.number.isRequired
}
