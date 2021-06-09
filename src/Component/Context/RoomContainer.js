import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer} from './context'

const RoomContainer = (props) => {
    return (
        <RoomConsumer>
        { value=>{
            //  console.log(value)
            const {room,sortedRooms} = value
            // console.log(sortedRooms)
             return(
            <div>
                
                <RoomFilter rooms={room}/>
                <RoomList rooms={sortedRooms} />
            </div>
             )
            }
        }

        </RoomConsumer>
        
    );
}

export default RoomContainer;