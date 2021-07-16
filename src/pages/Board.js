import React, { useState, useEffect } from "react";
import { client } from "../lib/api";
import { Link } from 'react-router-dom'

const Board = () => {
  //Query for and render the list of posts
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);

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
    width: "100px",
    margin: "5px",
  };

  const tilesData = tiles.map((tile) => (
    <img
      key={tile.id}
      src={tile.image}
      alt={tile.name}
      style={{ imageStyle }}
    />
  ));

  return (
    <div>
      <div className="header-container">
        <img src="" alt="bin" />
        <input type="text" name="search" placeholder="Search..." />
        <button type="submit">🔎</button>
      </div>
      <div>
        {/* This is where the selected speech content will be displayed. */}
        {tilesData}
      </div>
      <button>
          <Link to="/home">
            Home
          </Link>
        </button>
      <button>
          <Link to="/account">
            Account
          </Link>
        </button>
    </div>
  );
};

export default Board;
