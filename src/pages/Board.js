import React, { useState, useEffect } from "react";
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
    let { data, error } = await client.from("tiles").select("*");
    setTiles(data);
    setLoading(false);

    if (error) console.log(error);
    // else, carry on ..

    console.log(`Found ${data.length} cards`);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <main className="cards-container">
      <Header
        tiles={tiles}
        setTiles={setTiles}
        display={display}
        setDisplay={setDisplay}
        fetchTiles={fetchTiles}
      />
      <div className="cards">
        {/* This is where the selected speech content will be displayed. */}
        <DisplayedTiles display={display} vocalizer={vocalizer} speak={speak} />
        <Tiles
          tiles={tiles}
          display={display}
          setDisplay={setDisplay}
          setVocalizer={setVocalizer}
          fetchTiles={fetchTiles}
          setTiles={setTiles}
        />
        {/* End */}
      </div>
    </main>
  );
};

export default Board;
