import React from "react";

//@TODO when search result is deleted update. // User interaction // Bug fix

const DisplayedTiles = ({ display, speak, vocalizer } = {}) => {
  const scrollContainer = {
    overflowX: "scroll",
    border: "",
    marginBottom: "20px",
  };
  const wrapperScrollStyle = {
    display: "flex",
    flexWrap: "nowrap",
    border: "",
  };

  const imgScrollStyle = {
    width: "10rem",
    height: "auto",
    flex: "0 0 auto",
  };

  return (
    <div
      className="btn cards--output"
      aria-label="Vocalize selected pictograms"
      onClick={() => speak({ text: vocalizer })}
      style={scrollContainer}
    >
      <div className="wrapper" style={wrapperScrollStyle}>
        {display.map((tile) => (
          <img
            className="wrapper--img"
            key={tile.uniqId}
            src={tile.image}
            alt="card url"
            style={imgScrollStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayedTiles;
