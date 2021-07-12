import React from "react";
import image from "../assets/data1.png";

export default function Board() {
  const imageStyle = {
    width: "100px",
    margin: "5px",
  };
  return (
    <div>
      <div className="header-container">
        <img src="" alt="bin" />
        <input type="text" name="search" placeholder="Search..." />
        <button type="submit">🔎</button>
      </div>
      <textarea>
        This is where the selected speech content will be displayed.
      </textarea>
      <div className="img-data">
        <img src={image} alt="I want data" style={imageStyle} />
        <img src={image} alt="I want data" style={imageStyle} />
      </div>
    </div>
  );
}
