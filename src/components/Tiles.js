import React from "react";

export default function Tiles({
  tiles,
  display,
  fetchTiles,
  setDisplay,
  setTiles,
  setVocalizer,
}) {
  const buttonStyle = {
    margin: "0.1rem",
    width: "10rem",
    height: "10rem",
  };

  const noah = tiles.filter((noahs) => {
    return noahs.id === 48 || noahs.id === 72 || noahs.id === 89;
  });
  const i = tiles.filter((is) => {
    return (
      is.id === 504 ||
      is.id === 289 ||
      is.id === 224 ||
      is.id === 372 ||
      is.id === 472 ||
      is.id === 141 ||
      is.id === 4 ||
      is.id === 219 ||
      is.id === 217 ||
      is.id === 76 ||
      is.id === 177 ||
      is.id === 495 ||
      is.id === 505 ||
      is.id === 492 ||
      is.id === 502 ||
      is.id === 394
    );
  });

  const tilesData = tiles.map((tile) => (
    <button
      key={tile.id}
      //   key={uniqid()}
      onClick={(e) => {
        setDisplay([...display, tile]);
        if (tile.id === 0) {
          setTiles([...noah]);
        }
        if (tile.id === 224) {
          setTiles([...i]);
        }
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
