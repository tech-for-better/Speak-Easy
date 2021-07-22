import React, { useState, useEffect } from "react";
import { client } from "../lib/api";
<<<<<<< Updated upstream
import binIcon from "../assets/delete-bin.png";
import { Link } from "react-router-dom";
=======
import { useSpeechSynthesis } from "react-speech-kit";
import uniqid from "uniqid";
import Header from "../components/Header";
>>>>>>> Stashed changes

const Board = () => {
  //Query for and render the list of posts
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState([]);

<<<<<<< Updated upstream
=======
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();

>>>>>>> Stashed changes
  useEffect(() => {
    fetchTiles();
  }, []);

  async function fetchTiles() {
    // Make a request
    let { data, error } = await client.from("tiles").select("*");
    setTiles(data);
    setLoading(false);
<<<<<<< Updated upstream

    console.log("data", data);
=======
>>>>>>> Stashed changes
  }

  if (loading) return <p>Loading...</p>;
  if (!tiles.length) return <p>No posts.</p>;

  const imageStyle = {
    // width: "12%",
    margin: "3px",
    width: "10rem",
    height: "10rem",
  };

  const tilesData = tiles.map((tile) => (
    <button
      key={uniqid()}
      onClick={(e) => {
        // const { src } = e.target;
        // console.log(src);
        // setDisplay(display.concat(src));
        setDisplay([...display, tile]);
        let sentence = display.map((word) => word.name);
        setValue([sentence, tile.name]);
        console.log(sentence);
      }}
    >
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
            {display.map((tile) => (
              <img
                key={uniqid()}
                src={tile.image}
                alt="url"
                className="selectedTile"
              />
            ))}
          </div>

          <button onClick={() => speak({ text: value })}>Speak</button>
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
