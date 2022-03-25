import React, { useState,useEffect,useRef } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.jpeg";
import Destination3 from "../assets/Destination3.jpeg";
import Destination4 from "../assets/Destination4.jpeg";
import Destination5 from "../assets/Destination5.jpeg";
import Destination6 from "../assets/Destination6.jpeg";
import info1 from "../assets/info1.png";
import star from '../assets/star1.png'
import { auth ,db} from "./Firebase";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import {Link} from 'react-router-dom'
import './Reccommend.css'
import next  from '../assets/next.png'
import hotelsss from '../assets/Hotels_india.json'

export default function Recommend() {
  const [search,setSearch]= useState('')
  const [selected,setSelected] =useState('')
  const [info,setInfo]=useState([])
  const [wordEntered, setWordEntered] = useState("");
  const hotels = hotelsss
  const [press,setPress]= useState('white')
  const destination = localStorage.getItem('Destination').replace(/"/g, "")
  const budget = localStorage.getItem('Budget').replace(/"/g, "")
  const [filteredData, setFilteredData] = useState([]);
  const divEl = useRef(null);
  useEffect(()=>{
    db.collection("Restaurants").where("City","==",destination).onSnapshot((querySnapshot)=>{
      const q=[]

      querySnapshot.forEach((doc)=>{
        q.push(doc.data())
      })
      setInfo(q)
    })
   
   
  },[])
  info.map((i)=>{
    
  })
  const [hotel,setDestination]= useState('')
  const read=()=>{
    
  }
  const handleRest =(name)=>{
    setPress("red")
  
    divEl.current.style.backgroundColor = '#c94b4b';
    console.log("Hotel Selected ",name)
    localStorage.setItem("Restaurant",JSON.stringify(name))
    console.log("Press State",press)
  }
  const handleHotel=(e)=>{

    localStorage.setItem("Hotel",JSON.stringify(hotel))
  }
const handleSearch=(e)=>{

}
  
  
 
  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="recc_header">
        <div className="content">
            <h1>Step 2.</h1>
            <h2>Find The Perfect Meal</h2>
            <input type="search" placeholder="Search for a hotel" value={search} onChange={e=>setSearch(e.target.value)} />
            <div className="searchResults">
              {
                filteredData.slice(0,2).map((res)=>{
                  return(
                    <p>{res.HotelName} </p>
                  )
                })
              }
            </div>
        </div>
   
    <div className="prev">
      <Link to='/disp'><img src={next} alt="" onClick={handleSearch} /></Link>

    </div>
      </div>
      
      <div >

        { search == "" ? <div className="destinations">{info.map((hotel) => {
          if(hotel.Price <= budget){
            return (
            <div className="destination" ref={divEl} id={hotel.ID}  onClick={()=>handleRest(hotel.Restname)} style={{ press }}  >
              {/* <img src={.image} alt="" /> */}
              <h3>{hotel.Restname}</h3>
              <p>{hotel.Address}</p>
              <div className="rating">
              
              </div>
              <div className="info">
                <div className="services">  
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>₹{hotel.Price}/Person</h4>
              </div>
              <div className="address">
                <span>{hotel.Address}</span>
              </div>
              
            </div>
          );
          }
          
        })}</div> :  <div className="destinations">{info.map((hotel) => {
          if(hotel.Price <= budget && hotel.HotelName == search){
            return (
            <div className="destination"    >
              {/* <img src={.image} alt="" /> */}
              <h3>{hotel.HotelName}</h3>
              <p>{hotel.HotelAddress}</p>
              <div className="rating">
              
              </div>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{hotel.Price}</h4>
              </div>
              <div className="address">
                <span>{hotel.Address}</span>
              </div>
              <div className="distance">
                <span>Distance from Airport : <span className="bold">{hotel.Airport}</span>  Kms</span>
                <span></span>
              </div>
            </div>
          );
          }
          
        })}</div> }
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .rating img{
    width:20px;
    
  }
  .bold{
    font-weight:700;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
      .activee {
        border-bottom: 0.5rem solid #8338ec;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
    div:focus{
      background-color:'red'
    }
  }
`;
