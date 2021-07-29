import React, { useState, useEffect, useMemo } from "react";
import { client } from "../lib/api";
import { useSpeechSynthesis } from "react-speech-kit";
import Header from "../components/Header";
import Tiles from "../components/Tiles";
import DisplayedTiles from "../components/DisplayedTiles";

const Board = () => {
  //Query for and render the list of posts
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState([]);

  const [vocalizer, setVocalizer] = useState([]);
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    fetchTiles();
  }, []);

  async function fetchTiles() {
    // Make a request
    const { data, error } = await client.from("tiles").select("*");
    setTiles(data);
    setLoading(false);

    if (error) console.log(error);
    // else, carry on ..

    console.log(`Found ${data.length} cards`);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <main className="cards-container">
      <Header tiles={tiles} setTiles={setTiles} />
      <div className="cards">
        {/* This is where the selected speech content will be displayed. */}
        {/* <button
          className="cards--output"
          onClick={() => speak({ text: vocalizer })}
        >
          {display.map((tile) => (
            <img
              // key={tile.id}
              key={uniqid()}
              src={tile.image}
              alt="card url"
              className="selectedTile"
            />
          ))}
        </button> */}
        <DisplayedTiles display={display} vocalizer={vocalizer} speak={speak} />
        {/* Start */}
        <Tiles
          tiles={tiles}
          display={display}
          setDisplay={setDisplay}
          setVocalizer={setVocalizer}
          fetchTiles={fetchTiles}
        />
        {/* End */}
      </div>
    </main>
  );
};

export default React.memo(Board);
