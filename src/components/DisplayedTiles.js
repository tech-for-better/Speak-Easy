import React from "react";
import uniqid from "uniqid";

const DisplayedTiles = ({ display, speak, vocalizer }) => {
  return (
    <>
      <button
        className="cards--output"
        onClick={() => speak({ text: vocalizer })}
      >
        {display.map((tile) => (
          <img
            // key={tile.id}
            // key={uniqid()}
            key={tile.uniqId}
            src={tile.image}
            alt="card url"
            className="selectedTile"
          />
        ))}
      </button>
    </>
  );
};

export default DisplayedTiles;
