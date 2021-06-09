import React from 'react';
import {useContext} from 'react';
import {RoomContext} from './context'
import Title from '../Body/Services/Title'
import classes from './roomFilter.module.css'

function RoomFilter(props) {
  const context = useContext(RoomContext)
  // console.log(context)

  let getUnique = (items,value) =>{
         return [...new Set(items.map( item =>item[value]))]
  }
    const {
      room,featuredRoom,sortedRooms,Loading,capacity,price,
      minPrice,maxPrice,minSize,maxSize,type,breakfast,pets,
      ChangeHandler
    }=context
   
    let types = getUnique(room,"type")
    types = ["all",...types]
   
    types = types.map((item,index)=>{
            return <option value={item} key={index}>{item}</option>
    })


    return (
        <section>
          <Title>Search Rooms</Title>
          {/* <label name="type" >Room Type</label> */}
           <select 
           name="type"
           id="type"
           className={classes.type}
           value={type}
           onChange={ChangeHandler}
           >
             {types}
           </select>
               
        </section>
    );
}

export default RoomFilter;