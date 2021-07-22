import React from "react";
import binIcon from "../assets/delete-bin.png";
import { Link } from "react-router-dom";

export default function Header() {
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
          <input type="text" name="search" placeholder="Search..." />
          <button type="submit">🔎</button>
        </div>
      </div>
    </>
  );
}
