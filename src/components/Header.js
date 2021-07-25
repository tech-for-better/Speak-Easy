import React from "react";
// import { useState, useEffect } from "react";
import binIcon from "../assets/delete-bin.png";
import { Link } from "react-router-dom";

export default function Header(props) {

  // const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <>
      <div className="header-container">
        <div className="header-container--left">
          <button>
            <Link to="/">
              <i className="ri-home-8-line" style={{ width: "1000%" }}></i>
            </Link>
          </button>
          <button>
            <Link to="/account">
              <i className="ri-account-pin-box-line"></i>
            </Link>
          </button>
        </div>
        <div className="header-container--right">
          <img src={binIcon} alt="bin" />

          <input type="text" name="search" placeholder="Search..." 
          // onChange={(e) => {
          //   setSearchTerm(e.target.value);
          // } } 
          />
          {/* { props.tilesData.name.filter((val) => {
            if (searchTerm === "") {
              return val
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
          })*/}
          {/* { props.tilesData.name.map((val, key) => { 
            return (
              <div key={key}>
              <p>{val.name}</p>
              </div>
            )
          })} */}
          <button type="submit">🔎</button>
        </div>
      </div>
    </>
  );
}
