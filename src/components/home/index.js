import React from 'react'
import "./style.css";
const Home = () => {
  return (
    <div className='home-container'>
      <img src='https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg' className='home-back' alt='background'/>
      <div className='main-heading'>
      <h1 >Online Fish Marketing</h1>
      
      <p> Only Available In ALAMPUR

      </p>
      
      <li>Coming Soon...</li>
     
      </div>
      <div className='side-image'>
        <img src='./images/fish-image.png' alt='fish'  className='image-side' />
        
      </div>
      <button className='button'>Booking</button>
      
    </div>
  )
}

export default Home
