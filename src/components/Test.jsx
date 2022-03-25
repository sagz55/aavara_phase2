import React  , {useState} from 'react'
import data from '../assets/restaurants.json'
import { auth ,db} from "./Firebase";
function Test() {
    const res = data
    const [name,setName]=useState([])
    
    const ketu =()=>{
        
        res.map((hotel)=>{
            const a=[]
            a.push(hotel.HotelName)
            setName(a)
           
            db.collection("Restaurants").doc().set({
               ID:hotel["Restaurant ID"],
                Restname:hotel["Restaurant Name"],
                Address:hotel.Address,
                City:hotel.City,
                Price:hotel.Price,
                Cuisine:hotel.Cuisines,
                Rating:hotel["Rating color"],
                Lats:hotel.Latitude,
                Long:hotel.Longitude,
            }).then(
                
            ).catch(
                error=>error.message
            )
        })

        console.log("rest",res)
    }
  return (
    <div className='test_main'>
        
        <button onClick={ketu}>Ketu</button>
        
            <h1>Test</h1>
    </div>
  )
}

export default Test