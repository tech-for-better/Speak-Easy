import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home.png";
import accountIcon from "../assets/account.png";
import refreshIcon from "../assets/restart-line.png";

//@TODO: Prevent re-rendering after vocalization
//@TODO: Filter by search

export default function Header({ tiles, setTiles, setDisplay, fetchTiles }) {
  const [search, setSearch] = useState("");
  console.log("search", search);

  const HandleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setSearch(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const HandleClick = () => {
    const tile = tiles.filter((item) => item.name === search);
    setTiles(tile);
    setSearch("");
  };

  const handleRefreshClick = () => {
    setDisplay([]);
    fetchTiles();
  };

  console.log("tiles", tiles);

  return (
    <>
      <div className="header-container">
        <div className="header-container--left">
          <button>
            <Link to="/">
              <img src={homeIcon} alt="home icon" style={{ width: "120%" }} />
            </Link>
          </button>
          <button>
            <Link to="/account">
              <img
                src={accountIcon}
                alt="account icon"
                style={{ width: "120%" }}
              />
            </Link>
          </button>
        </div>
        <div className="header-container--right">
          <img
            src={refreshIcon}
            alt="refresh icon"
            style={{ marginRight: "0.5rem" }}
            onClick={handleRefreshClick}
          />
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="search"
              value={search}
              onChange={HandleChange}
              placeholder="Search..."
            />
            <button type="submit" onClick={HandleClick}>
              🔎
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
