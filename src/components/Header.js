import React, { useState } from "react";
import { Link } from "react-router-dom";
import binIcon from "../assets/delete-bin.png";
import homeIcon from "../assets/home.png";
import accountIcon from "../assets/account.png";

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
              <img src={homeIcon} alt="" style={{ width: "120%" }} />
            </Link>
          </button>
          <button>
            <Link to="/account">
              <img src={accountIcon} alt="" style={{ width: "120%" }} />
            </Link>
          </button>
        </div>
        <div className="header-container--right">
          <img src={binIcon} alt="bin" style={{ marginRight: "0.5rem" }} />
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
