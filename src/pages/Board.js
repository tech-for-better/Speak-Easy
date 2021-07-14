import React, { useState, useEffect } from "react";
import { client } from "../lib/api";
import binIcon from "../assets/delete-bin.png";

const Board = () => {
  //Query for and render the list of posts
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTiles();
  }, []);

  // async function createdTiles() {
  //   const { data, error } = await client.from("tiles").insert([
  //     {
  //       id: 1,
  //       name: "Hello World",
  //       created_by: "My first post",
  //     },
  //   ]);
  // }

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
    width: "12%",
    margin: "3px",
  };

  const cardsBoardStyle = {
    width: "98vw",
    height: "15vh",
    border: "solid #259557 1px",
    margin: "0 auto",
    borderRadius: "15px",
  };

  const cardsStyle = {
    width: "98vw",
    height: "100vh",
    margin: "0 auto",
  };

  const tilesData = tiles.map((tile) => (
    <img key={tile.id} src={tile.image} alt={tile.name} style={imageStyle} />
  ));

  return (
    <div>
      <div className="header-container">
        <img src={binIcon} alt="bin" />
        <input type="text" name="search" placeholder="Search..." />
        <button type="submit">🔎</button>
      </div>
      <div style={cardsBoardStyle}>
        {/* This is where the selected speech content will be displayed. */}
      </div>
      <div style={cardsStyle}>{tilesData}</div>
    </div>
  );
};

export default Board;
