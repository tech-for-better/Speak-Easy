import React, { useState, useEffect } from "react";
import { client } from "../lib/api";
import image from "../assets/data1.png";

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
    console.log("tiles", tiles);
  }

  if (loading) return <p>Loading...</p>;
  if (!tiles.length) return <p>No posts.</p>;

  const imageStyle = {
    width: "100px",
    margin: "5px",
  };

  return (
    <div>
      <div className="header-container">
        <img src="" alt="bin" />
        <input type="text" name="search" placeholder="Search..." />
        <button type="submit">🔎</button>
      </div>
      <div>This is where the selected speech content will be displayed.</div>
      <div className="img-data">
        <img src={image} alt="I want data" style={imageStyle} />
        <img src={image} alt="I want data" style={imageStyle} />
      </div>
    </div>
  );
};

export default Board;
