import React ,{Component} from 'react'
import items from '../rooms/data'
const RoomContext = React.createContext()

class RoomProvider extends Component  {
    constructor(props){
        super(props)
        let rooms = this.formatData(items)
        // console.log(rooms); 
        let featuredRooms = rooms.filter(room =>
            (room.featured === true))
        // console.log(featuredRooms) 
        this.state = {
            rooms,
            featuredRooms,
             sortedRooms : rooms,
            Loading : false
        }
    } 

    formatData(items){
        let tempItems = items.map(item => {
            let id=item.sys.id
            let images = item.fields.images.map(image => (
                image.fields.file.url)   )
            let rooms = { ...item.fields,images,id}
            return rooms;
          })
         return tempItems;   
    }


   getRoom = slug =>{
        let TempRoom = [...this.state.rooms];
        const room = TempRoom.find(room=>room.slug===slug); 
        console.log(room)
        return room;
    }
   

    render(){
  

        return (
           <RoomContext.Provider value={{
                                         ...this.state,
                                        getRoom : this.getRoom
                                        }}>
               {this.props.children}
           </RoomContext.Provider>
            );
    }
}

const RoomConsumer =  RoomContext.Consumer;


export {RoomContext,RoomConsumer,RoomProvider};