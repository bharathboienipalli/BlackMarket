import React from 'react';
import styless from "./ mystyle.module.css"
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 36px",
  background: "linear-gradient(90deg, #f8fafc 0%,rgb(241, 240, 239) 100%)",
  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
  borderRadius: "0 0 18px 18px",
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "24px"
};

const brandStyle = {
  fontWeight: "bold",
  fontSize: "1.3rem",
  fontFamily:"Comic Sans MS",
  color: "#e6521f",
  margin:"0",
  marginLeft:"400px"
};

const buttonGroupStyle = {
  display: "flex",
  gap: "16px"
};

const buttonStyle = {
  background: "white",
  color: "#e6521f",
  border: "1px solid white",
  borderRadius: "10px",
  padding: "10px 20px",  fontWeight: "bold",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s"
};
const buttonStyle2 = {
  background: "Black",
  color: "white",
  border: "1px solid white",
  borderRadius: "10px",
  padding: "10px 20px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s"
};

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <div style={leftStyle}>
        <h3 style={{margin: 0}}>Browse Categories</h3>
        <p style={brandStyle}>BlackMarket</p>
      </div>
      <div style={buttonGroupStyle}>
        <button style={buttonStyle}>Pricing</button>
        <button style={buttonStyle2}>Sign In</button>
      </div>
    </nav>
  );
}

export default NavBar;