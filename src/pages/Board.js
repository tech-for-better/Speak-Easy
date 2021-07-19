import React, { useState, useEffect } from "react";
import { client } from "../lib/api";
import binIcon from "../assets/delete-bin.png";
import { Link } from "react-router-dom";
import { useSpeechSynthesis } from 'react-speech-kit';

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
    width: '10rem',
    height: '10rem'
  };

  const addToDisplay = (index) => {
    setDisplay(display.concat(tiles[index]));
  };

  const tilesData = tiles.map((tile, idx) => (
    <button key={idx} onClick={() => addToDisplay(idx)}>
      <img src={tile.image} alt={tile.name} style={imageStyle} />
    </button>
  ));
  const sentence = display.map((clickedTile) => 
    
  <img src={clickedTile.image} alt={clickedTile.name} style={imageStyle} />
  
  );
  console.log("display src", sentence);

  return (
    <div>
      <div className="header-container">
        <img src={binIcon} alt="bin" />
        <input type="text" name="search" placeholder="Search..." />
        <button type="submit">🔎</button>
      </div>
      <div className="cards-grid">
        {/* This is where the selected speech content will be displayed. */}
        <div className="output">{sentence}
          {/* <div className="previous-card">
            <img src={src[0]} alt="displaying" />
            <img src={src[1]} alt="displaying" />
            <img src={src[2]} alt="displaying" />
            <img src={src[3]} alt="displaying" />
            <img src={src[4]} alt="displaying" />
          </div> */}

          {/* text to voice */}
          <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
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