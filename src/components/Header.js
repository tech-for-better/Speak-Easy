import React, { useState } from "react";
import binIcon from "../assets/delete-bin.png";
import { Link } from "react-router-dom";

export default function Header({ tiles, setTiles }) {
  const [search, setSearch] = useState("");
  console.log("search", search);

  const HandleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setSearch(value);
  };

  //@TODO: Prevent re-rendering after vocalization
  //@TODO: Filter by search

  const HandleClick = () => {
    const tile = tiles.filter((item) => item.name === search);

    setTiles(tile);
    setSearch("");
  };

  console.log("tiles", tiles);

  return (
    <>
      <div className="header-container">
        <div className="header-container--left">
          <button>
            <Link to="/">
              <i className="ri-home-8-line" style={{ width: "100%" }}></i>
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
          <input
            type="text"
            name="search"
            value={search}
            onChange={HandleChange}
            placeholder="Search..."
          />
          <button type="button" onClick={HandleClick}>
            🔎
          </button>
        </div>
      </div>
    </>
  );
}
