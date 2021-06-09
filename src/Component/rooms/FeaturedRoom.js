import React, { Component } from  'react';
import {RoomContext} from './../Context/context';
import Title from './../Body/Services/Title'
import Room from '../SingleRoom/Room';
import Loading from './Loading';
import classes from './Featured.module.css';

class Feature extends Component {
 
    static contextType = RoomContext
    render (){
        let {Loading,featuredRoom : rooms} =this.context;
        //  console.log(rooms)
        
     rooms=rooms.map(room => {
          return <Room key={room.id} room={room} />
      })

    return (
    <section className="featured-rooms">
       <Title>Featured Rooms</Title>
       {/* loading? <Loading /> : rooms */}
        <div className={classes.room_container}>
            {rooms}
        </div>
    </section> 
    )
    }
   
}

export default Feature;
