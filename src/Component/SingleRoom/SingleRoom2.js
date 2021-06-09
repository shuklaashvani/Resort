import React, { Component } from 'react';
import Hero from '../Body/Hero/Hero';
import Banner from '../Body/Hero/Parts/Banner';
import Button from '../Body/Hero/Parts/Button';
import {RoomContext} from '../context'
import styled from 'styled-components';
import StyledHero from './StyledHero'
import {Link} from 'react-router-dom'

class SingleRoom extends Component {
  constructor(props){
      super(props)
      // console.log(props.match.params)
      this.state={
        slug : this.props.match.params.slug,
        room : {}

      }
  }

  static contextType = RoomContext

  render(){
    const { getRoom } = this.context;
    console.log(getRoom);
    const room = getRoom(this.state.slug);
    // const room = null;
    if (!room) {
      return (
        <div>
          <h3> no such room could be found...</h3>
          <Button pa="/rooms">
            back to rooms
          </Button>
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
      images
    } = room;

    console.log(name);
        
   return(
       <>
      {/* <Hero hero="roomsHero" > */}
         {/* <StyledHero img = {images[0]}> */}
        <Banner title={this.state.slug} subtitle="">
          <Button pa="/Rooms">BACK TO ROOMS</Button>
        </Banner>
        {/* </StyledHero> */}
      {/* </Hero> */}
       </>
   )
   }
}

export default SingleRoom;
