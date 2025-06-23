import React from 'react'

const Word = ({text}) => {
    const heading={
        textAlign:"center",
        fontSize:"20px",
        fontFamily:"papyrus",
       
    }
  return (
    <div style={heading}> 
      <p>{text}</p>
    </div>
  )
}

export default Word
