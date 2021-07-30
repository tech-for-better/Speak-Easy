import React from "react";
import uniqid from "uniqid";

import { getCorespondingArray } from '../utils/utils';

export default function Tiles({
  tiles,
  display,
  fetchTiles,
  setDisplay,
  setVocalizer,
}) {
  const buttonStyle = {
    margin: "0.1rem",
    width: "10rem",
    height: "10rem",
  };

  // const noah = tiles.filter((noahs) => {
  //   return noahs.id === 224  || noahs.id === 518  || noahs.id === 673  || noahs.id === 274  || noahs.id === 485 || noahs.id ===  504 || noahs.id === 445 || noahs.id === 66 || noahs.id === 101 || noahs.id === 289 || noahs.id === 492 || noahs.id === 48 || noahs.id === 521 || noahs.id === 302 || noahs.id === 491 || noahs.id === 752;
  // });
  // const i = tiles.filter((is) => {
  //   return is.id === 495 || is.id === 492 || is.id === 143 || is.id === 245 || is.id === 680 || is.id === 143 || is.id === 245 || is.id === 680 || is.id === 504 || is.id === 289 || is.id === 244 || is.id === 372 || is.id === 472 || is.id === 141 || is.id === 4 || is.id === 219;
  // });
// 

  const tilesData = tiles.map((tile) => (
    <button
      key={tile.id}
      onClick={(e) => {
        setDisplay([...display, { ...tile, uniqId: uniqid() }]);
        
        getCorespondingArray()
        // if (tile.id === 0) {
        //   return setTiles([...noah]);
        // }
        // if (tile.id === 224) {
        //   return setTiles([...i]);
        // }
        let sentence = display.map((displayedTile) => displayedTile.name);
        setVocalizer([...sentence, tile.name]);
        fetchTiles();
      }}
      style={buttonStyle}
    >
      <img src={tile.image} alt={tile.name} />
    </button>
  ));
  console.log("display", display);
  return (
    <div className="cards--displayed">
      {/* Call the inner function once you onMouseMove: */}
      {!tilesData.length ? (
        <button
          onMouseMove={() =>
            setTimeout(() => {
              fetchTiles();
            }, 1000)
          }
          style={{
            width: "20rem",
            height: "20rem",
            borderRadius: "20%",
            marginTop: "2rem",
            lineHeight: "2",
          }}
        >
          This pictogram does not exist yet! <br /> Click to try another.
        </button>
      ) : (
        tilesData
      )}
    </div>
  );
}
