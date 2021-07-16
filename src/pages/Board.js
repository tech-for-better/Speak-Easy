import React, { useState, useEffect } from "react";
import { client } from "../lib/api";
import binIcon from "../assets/delete-bin.png";
import { Link } from "react-router-dom";

const Board = () => {
  //Query for and render the list of posts
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetchTiles();
  }, []);

  async function fetchTiles() {
    // Make a request
    let { data, error } = await client.from("tiles").select("*");
    setTiles(data);
    setLoading(false);

    console.log("data", data);
  }

  if (loading) return <p>Loading...</p>;
  if (!tiles.length) return <p>No posts.</p>;

  const imageStyle = {
    // width: "12%",
    margin: "3px",
  };

  const addToDisplay = (index) => {
    setDisplay(display.concat(tiles[index]));
  };

  const tilesData = tiles.map((tile, idx) => (
    <button key={idx} onClick={() => addToDisplay(idx)}>
      <img src={tile.image} alt={tile.name} style={imageStyle} />
    </button>
  ));
  const src = display.map((src) => src.image);
  console.log("display src", src);
  return (
    <div>
      <div className="header-container">
        <img src={binIcon} alt="bin" />
        <input type="text" name="search" placeholder="Search..." />
        <button type="submit">🔎</button>
      </div>
      <div className="cards-grid">
        {/* This is where the selected speech content will be displayed. */}
        <div className="output">
          <div className="previous-card">
            <img src={src[0]} alt="displaying" />
            <img src={src[1]} alt="displaying" />
            <img src={src[2]} alt="displaying" />
            <img src={src[3]} alt="displaying" />
            <img src={src[4]} alt="displaying" />
          </div>
          <div className="current-card"></div>
        </div>
        {tilesData}
      </div>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/account">Account</Link>
      </button>
    </div>
  );
};

export default Board;
