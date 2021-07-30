import React from "react";

const DisplayedTiles = ({ display, speak, vocalizer }) => {
  return (
    <>
      <button
        className="btn cards--output"
        aria-label="Vocalize selected pictograms"
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
