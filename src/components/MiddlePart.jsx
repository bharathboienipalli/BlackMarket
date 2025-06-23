import { Cursor } from 'mongoose'
import React from 'react'
import { TbBackground } from 'react-icons/tb'

const MiddlePart = ({imagePath}) => {
    const middleStyle={
        backgroundImage:`url(${imagePath})`,
        borderRadius:"10px",
        paddingBottom:"200px",
        marginTop:"50px",
        display:"flex",
        flexDirection:"column",
        alignItems: "flex-start", 
         paddingLeft: "80px" 
    }
    const heading = {
      color:"orange",
      marginLeft:"10px",
      marginBottom:"10px",
      fontFamily:"Brush Script MT",
      boxShadow:"4px 4px 4px 4px black",
      borderRadius:"10px",
      padding:"10px 20px",
      
      backgroundColor:"white"
    }
    const buttonStyle={
      marginTop: "20px",           
    marginLeft: "10px",             
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(100deg,white 0%,orange 100%)",
    color:"black",
    fontFamily:"Brush Script MT",
    fontSize:"15px",
    cursor:"pointer"
    }
  return (
    <div style={middleStyle}>
      <h1 style={heading}>What's New</h1>
      <button style={buttonStyle}>Explore Now &gt;</button>
    </div>
  )
}

export default MiddlePart
