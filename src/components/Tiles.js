import React from "react";
import uniqid from "uniqid";

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

  const tilesData = tiles.map((tile) => (
    <button
      key={tile.id}
      onClick={(e) => {
        setDisplay([...display, { ...tile, uniqId: uniqid() }]);
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
