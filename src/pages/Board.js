import React, { useState, useEffect } from "react";
import { client } from "../lib/api";
import { useSpeechSynthesis } from "react-speech-kit";
import uniqid from "uniqid";
import Header from "../components/Header";

const Board = () => {
  //Query for and render the list of posts
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState([]);

  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();

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

  const buttonStyle = {
    margin: "0.1rem",
    width: "10rem",
    height: "10rem",
  };

  const noah = tiles.filter((noahs) => {
    return noahs.id === 48 || noahs.id === 72 || noahs.id === 89
  });
  const i = tiles.filter((is) => {
    return is.id === 504 || is.id === 289 || is.id === 224 || is.id === 372 || is.id === 472 || is.id === 141 || is.id === 4 || is.id === 219 || is.id === 217 || is.id === 76 || is.id === 177 || is.id === 495 || is.id === 505 || is.id === 492 || is.id === 502 || is.id === 394
  });

  const tilesData = tiles.map((tile) => (
    <button
      key={tiles.id}
      onClick={(e) => {
        
        setDisplay([...display, tile]);
        if (tile.id === 0) {
          setTiles([...noah])
        }
        if (tile.id === 224) {
          setTiles([...i])
        }
        let sentence = display.map((word) => word.name)
        setValue([sentence, tile.name]);
      }}
      style={buttonStyle}
    >
      <img src={tile.image} alt={tile.name} />
    </button>
  ));

  return (
    <main className="cards-container">
      <Header />
      <div className="cards">
        {/* This is where the selected speech content will be displayed. */}
        <div className="cards--output">
          {display.map((tile) => (
            <img
              key={tiles.id}
              src={tile.image}
              alt="url"
              className="selectedTile"
            />
          ))}
          <button onClick={() => speak({ text: value })}>Speak</button>
        </div>
        <div className="cards--displayed">{tilesData}</div>
      </div>
    </main>
  );
};

export default Board;
