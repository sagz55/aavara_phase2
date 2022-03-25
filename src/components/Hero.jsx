import React ,{useState} from "react";
import scrollreveal from "scrollreveal";
import styled from "styled-components";
import homeImage from "../assets/hero.png";
import { Link ,useHistory} from 'react-router-dom';
export default function Hero() {
  const [destination,setDestination] = useState('')
  const [budget,setBudget]= useState('')
  const history= useHistory()
  const scroll =(e)=>{
    scrollreveal().reveal('#recommend')
  }
  const go =()=>{
        history.push('/recommend')
        localStorage.setItem("Destination",JSON.stringify(destination))
        localStorage.setItem("Budget",JSON.stringify(budget))
  }
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
  
          <h1>AAVARA</h1>
          <p>
            "Not all those who wander are lost" 
             Atleast not while we are around :)
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Enter destination</label>
            <input type="text" placeholder="Search..." value={destination} onChange={e=>setDestination(e.target.value)} />
          </div>
          <div className="container">
            <label htmlFor="">Arriving On</label>
            <input type="datetime-local" name="" id="" />
          </div>
          <div className="container">
            <label htmlFor="">Returning On</label>
            <input type="datetime-local" name="" id="" />
          </div>
          <div className="container">
            <label htmlFor="">Total Budget</label>
            <input type="number" placeholder="Amount"  value={budget} onChange={e=>setBudget(e.target.value)} />
          </div>
         <Link to='/create-trip'>  <button onClick={go} > Explore Now </button></Link>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 6rem;
        letter-spacing: 0.2rem;
        font-family:'Ananda Neptouch 2',san-serif;
      }
      p {
        text-align: center;
        padding: 0 10vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      a{
        text-decoration:none;
        color:black;
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
