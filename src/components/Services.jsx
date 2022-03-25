import React from "react";
import { VscNoNewline } from "react-icons/vsc";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Stay Budget",
      // sub1: "duuefuhud",
      subTitle:
        "Let us know how much you are willing to spend on your stay.",
    },
    {
      icon: service2,
      title: "Food Budget",
      subTitle:
        "Let us know how much you are willing to spend on your meals.",
    },
    {
      icon: service3,
      title: "Event Budget",
      subTitle:
        "Let us know how much you want to spend on various events.",
    },
    
  ];
  
function Services() {
    const data = [
        {
          icon: VscNoNewline,
          title: "Pie chart",
        },
    ];
  }
      
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div> 
            <h3>{service.title}</h3>
            {/* <h5>{Services.sub1}</h5> */}
            <p>{service.subTitle}</p>
          </div>
        );
      })}
      <div className="service">
            
          </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service input{
    border:1px solid grey;
    border-radius:3px;
    padding:1%; 
  }
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
