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
    margin: "0.5rem",
    width: "10rem",
    height: "10rem",
    display: "flex",
    justifyContent: "center",
  };

  const tilesData = tiles.map((tile) => (
    <button
      style={buttonStyle}
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
              key={uniqid()}
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
