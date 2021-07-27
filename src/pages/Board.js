import React, { useState, useEffect } from "react";
import { client } from "../lib/api";
import { useSpeechSynthesis } from 'react-speech-kit';
import uniqid from "uniqid";
import Header from "../components/Header";

const Board = () => {
  //Query for and render the list of posts
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState([]);

  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    fetchTiles();
  }, []);

  async function fetchTiles() {
    // Make a request
    let { data } = await client.from("tiles").select("*");
    setTiles(data);
    setLoading(false);

  }

  if (loading) return <p>Loading...</p>;
  if (!tiles.length) return <p>No posts.</p>;

  const imageStyle = {
    // width: "12%",
    margin: "3px",
    width: '10rem',
    height: '10rem'
  };

  const noah = tiles.filter((noahs) => {
    return noahs.id === 224  || noahs.id === 518  || noahs.id === 673  || noahs.id === 274  || noahs.id === 485 || noahs.id ===  504 || noahs.id === 445 || noahs.id === 66 || noahs.id === 101 || noahs.id === 289 || noahs.id === 492 || noahs.id === 48 || noahs.id === 521 || noahs.id === 302 || noahs.id === 491 || noahs.id === 752;
  });
  const i = tiles.filter((is) => {
    return is.id === 495 || is.id === 492 || is.id === 143 || is.id === 245 || is.id === 680 || is.id === 143 || is.id === 245 || is.id === 680 || is.id === 504 || is.id === 289 || is.id === 244 || is.id === 372 || is.id === 472 || is.id === 141 || is.id === 4 || is.id === 219;
  });

  const tilesData = tiles.map((tile) => (
    <button
      key={uniqid()}
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
    >
      <img src={tile.image} alt={tile.name} style={imageStyle} />
    </button>
  ));

  return (
    <div>
      <Header />
      <div className="cards-grid">
        {/* This is where the selected speech content will be displayed. */}
        <div className="output">
          <div className="previous-card">
            {display.map((tile) => (
              <img key={uniqid()} src={tile.image} alt="url" className='selectedTile'/>
            ))}
          </div>
            {/* text to voice */}
      <button onClick={() => speak({ text: value })}>Speak</button>
          <div className="current-card"></div>
        </div>
        {tilesData}
      </div>
    </div>
  );
};

export default Board;