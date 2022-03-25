import React,{useEffect,useState} from 'react'
import '../components/Display.css'
import { auth ,db} from "./Firebase";
function Display() {
  const destination = localStorage.getItem('Destination').replace(/"/g, "")
  const hotel = localStorage.getItem('Hotel').replace(/"/g, "")
  const rest = localStorage.getItem('Restaurant').replace(/"/g, "")
  const [info,setInfo]=useState([])
  useEffect(()=>{
    db.collection('Restaurants').where("Restname","==",rest).onSnapshot((querySnapshot)=>{
      const q=[]

      querySnapshot.forEach((doc)=>{
        q.push(doc.data())
      })
      setInfo(q)
    })
  },[])
  console.log("info",info)
  return (
    <div className='display_main'>
        <h1>Desitnation Selected: {destination}</h1>
        <h2>Hotel Selected: {hotel}</h2>
        <h2>Restaurant : {rest}</h2>
        {
          info.map((resto)=>(
            <div className="restData">
              
              <h3>{resto.Restname}</h3>
              <h3>{resto.Rating}</h3>
              <h3>{resto.Cuisine}</h3>
              <h3>{resto.City}</h3>
              <h3>{resto.Address}</h3>
              <h3>{resto.Price}</h3>
            </div>
          ))
        }

    </div>
  )
}

export default Display