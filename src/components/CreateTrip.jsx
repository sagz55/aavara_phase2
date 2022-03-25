import React from 'react'
import './Createtrip.css'
import {Link} from 'react-router-dom'
function CreateTrip() {
  return (
    <div className='createtrip_main'>
          <div className="ct_cta">
            <h1>Explore The World With Ease.</h1>
            <div className="ct_ctabutton">
           <Link to='/recommend'>  <button>Create Trip</button></Link> 
            </div>
          </div>
          <div className="ct_dicover">
            <div className="ctd_header">
              <h2>Discover Packages</h2>
            </div>
            <div className="ctd_cards">
              <div className="ctd_card c1">
              <div className="card_text">
                  <h4>Adventure</h4>
                <h3>Expeditions</h3>
                </div>
              </div>
              <div className="ctd_card c2">
              <div className="card_text">
                  <h4>Adventure</h4>
                <h3>Expeditions</h3>
                </div>
                
              </div>
              <div className="ctd_card c3">
              <div className="card_text">
                  <h4>Adventure</h4>
                <h3>Expeditions</h3>
                </div>
              </div>
              <div className="ctd_card c4">
              <div className="card_text">
                  <h4>Adventure</h4>
                <h3>Expeditions</h3>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CreateTrip