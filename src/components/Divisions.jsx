import React from 'react'
import './App.css';
const Divisions = ({images}) => {
   

  return (
    <div>
      <img src={images} style={{
      width: "100%",
      height:"400px",
      objectFit: "cover",   
      display: "block"      
      }} ></img>
    </div>
  )
}

export default Divisions
