import React, { useState, useEffect } from "react";
import { client } from "../lib/api";
import { useSpeechSynthesis } from "react-speech-kit";
import Header from "../components/Header";

const Board = () => {
  //Query for and render the list of posts
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState([]);

  const [vocalizer, setVocalizer] = useState([]);
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    // deleteTiles();
    fetchTiles();
  }, []);

  // async function deleteTiles() {
  //   const { data, error } = await client
  //     .from("tiles")
  //     .delete()
  //     .match({ id: 1102 && 1101 && 1103 });
  // }

  async function fetchTiles() {
    // Make a request
    let { data, error } = await client.from("tiles").select("*");
    setTiles(data);
    setLoading(false);

    if (error) console.log(error);
    // else, carry on ..

    console.log(`Found ${data.length} cards`);
  }

  if (loading) return <p>Loading...</p>;
  if (!tiles.length) return <p>No posts.</p>;

  const buttonStyle = {
    margin: "0.1rem",
    width: "10rem",
    height: "10rem",
  };

  const noah = tiles.filter((noahs) => {
    return noahs.id === 224  || noahs.id === 518  || noahs.id === 673  || noahs.id === 274  || noahs.id === 485 || noahs.id ===  504 || noahs.id === 445 || noahs.id === 66 || noahs.id === 101 || noahs.id === 289 || noahs.id === 492 || noahs.id === 48 || noahs.id === 521 || noahs.id === 302 || noahs.id === 491 || noahs.id === 752;
  });
  const i = tiles.filter((is) => {
    return is.id === 495 || is.id === 492 || is.id === 143 || is.id === 245 || is.id === 680 || is.id === 143 || is.id === 245 || is.id === 680 || is.id === 504 || is.id === 289 || is.id === 244 || is.id === 372 || is.id === 472 || is.id === 141 || is.id === 4 || is.id === 219;
  });

  const tilesData = tiles.map((tile) => (
    <button
      key={tile.id}
      onClick={(e) => {
        // const { src } = e.target;
        setDisplay([...display, tile]);
        if (tile.id === 0) {
          return setTiles([...noah]);
        }
        if (tile.id === 224) {
          return setTiles([...i]);
        }
        console.log([...noah]);

        let sentence = display.map((displayedTile) => displayedTile.name);
        setVocalizer([...sentence, tile.name]);
        fetchTiles();
      }}
      style={buttonStyle}
    >
      <img src={tile.image} alt={tile.name} />
    </button>
  ));

  return (
    <main className="cards-container">
      <Header tiles={tiles} display={display} setTiles={setTiles} />
      <div className="cards">
        {/* This is where the selected speech content will be displayed. */}
        <div className="cards--output">
          {display.map((tile) => (
            <img
              key={tile.id}
              src={tile.image}
              alt="url"
              className="selectedTile"
            />
          ))}
          <button onClick={() => speak({ text: vocalizer })}>Speak</button>
        </div>
        <div className="cards--displayed">{tilesData}</div>
      </div>
    </main>
  );
};

export default Board;
