import React ,{useState} from 'react'
import items from '../rooms/data'
const RoomContext = React.createContext()


const RoomProvider =(props) =>{

    
    const formatData=(items)=>{
        let tempItems = items.map(item => {
            let id=item.sys.id
                let images = item.fields.images.map(image => (
                    image.fields.file.url)   )
                let rooms = { ...item.fields,images,id}
                return rooms;
              })
             return tempItems;   
        }
    
    const max_Price = Math.max(...items.map((room)=>room.fields.price))
    const max_size = Math.max(...items.map((room)=>room.fields.size))
      
    const getRoom = slug =>{
            let TempRoom = [...rooms];
            const room = TempRoom.find(room=>room.slug===slug); 
            // console.log(room)
            return room;
        }

    
    const rooms =formatData(items)
    const featuredRooms = rooms.filter(room =>
            (room.featured === true))

            
    const [room,setrooms] = useState(rooms)
    const [featuredRoom,setFeaturedRooms] = useState(featuredRooms)
    let [sortedRooms,setSortedRooms] = useState(room)
    const [Loading,setLoading] = useState(true)
    const [capacity,setCapacity] = useState(1)
    const [price,setPrice] = useState(0)
    const [minPrice,setMinPrice] = useState(0)
    const [maxPrice,setMaxPrice] = useState(max_Price)
    const [minSize,setMinSize] = useState(0)
    const [maxSize,setMaxSize] = useState(max_size)
    const [breakfast,setBreakfast] = useState(false)
    const [pets,setPets] = useState(false)
    let [type,setType] = useState("all")
    

    const ChangeHandler = event =>{
        const types=event.target.type
        const name=event.target.name
        const value=event.target.value

        setType(value)

        const sortRooms = room.filter(room =>
            (room[name] === value))
            if(value==='all'){
                setSortedRooms([...room])
            }else{
                setSortedRooms([...sortRooms])
            }        
    }
    
    
    return (
            <RoomContext.Provider value={{
                                          room,featuredRoom,sortedRooms,Loading,capacity,price,
                                          minPrice,maxPrice,minSize,maxSize,type,breakfast,pets,
                                         getRoom : getRoom,
                                         ChangeHandler
                                         }}>
                {props.children}
            </RoomContext.Provider>
             );
     
} 
const RoomConsumer =  RoomContext.Consumer;


export {RoomContext,RoomConsumer,RoomProvider};



