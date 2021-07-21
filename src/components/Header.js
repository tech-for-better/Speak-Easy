import React from "react";
import binIcon from "../assets/delete-bin.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>
        <button>
          <Link to="/">
            <i className="ri-home-8-line"></i>
          </Link>
        </button>
        <button>
          <Link to="/account">
            <i className="ri-account-pin-box-line"></i>
          </Link>
        </button>
      </div>
      <div className="header-container">
        <img src={binIcon} alt="bin" />
        <input type="text" name="search" placeholder="Search..." />
        <button type="submit">🔎</button>
      </div>
    </>
  );
}
