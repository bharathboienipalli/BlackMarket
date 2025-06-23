import React from 'react'
import { CiSearch } from "react-icons/ci";
import { TbPhotoSearch } from "react-icons/tb";
const Search = ({ text, placeholder }) => {
  const searchStyle = {
    marginTop: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const formStyle = {
    backgroundColor: "#fff",
    borderRadius: "30px",
    boxShadow: "10px 20px 10px rgba(0,0,0,0.08)",
    padding: "6px 18px",
    display: "flex",
    alignItems: "center",
    maxWidth: "550px",
    width: "100%"
  };

  const inputStyle = {
    border: "none",
    outline: "none",
    padding: "12px 28px",
    borderRadius: "30px",
    fontSize: "1.1rem",
    width: "400px",
    color: "black"
  };
  const dropDown={
   border:"none",
   fontWeight:"bold",
   fontFamily:"Comic Sans MS",
   outline:"none",
   margin:"0px 10px 0px 10px"
  }
  return (
    <div style={searchStyle}>
      <form style={formStyle}>
        <CiSearch style={{fontSize:"20px",
        marginLeft:"10px"
       }}/><input
          type={text}
          placeholder={placeholder}
          style={inputStyle}
        />|
        <select style={dropDown}>
            <option>Images</option>
        </select>|
       <TbPhotoSearch style={{fontSize:"20px",
        marginLeft:"10px"
       }} />
      </form>
    </div>
  );
}

export default Search