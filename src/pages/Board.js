import React, { useState, useEffect } from "react";
import { client } from "../lib/api";
import uniqid from "uniqid";
import Header from "../components/Header";

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

  const tilesData = tiles.map((tile) => (
    <button
      key={uniqid()}
      onClick={(e) => {
        console.log(e.target);
        // const { src } = e.target;
        // console.log(src);
        // setDisplay(display.concat(src));
        setDisplay([...display, tile]);
      }}
    >
      <img src={tile.image} alt={tile.name} style={imageStyle} />
    </button>
  ));

  console.log("display", display);
  return (
    <div>
      <Header />
      <div className="cards-grid">
        {/* This is where the selected speech content will be displayed. */}
        <div className="output">
          <div className="previous-card">
            {display.map((tile) => (
              <img key={uniqid()} src={tile.image} alt="url" />
            ))}
          </div>
          <div className="current-card"></div>
        </div>
        {tilesData}
      </div>
    </div>
  );
};

export default Board;
