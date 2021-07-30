import React from "react";

const DisplayedTiles = ({ display, speak, vocalizer }) => {
  return (
    <>
      <button
        className="cards--output"
        onClick={() => speak({ text: vocalizer })}
      >
        {display.map((tile) => (
          <img
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
