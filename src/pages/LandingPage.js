import React from "react";
import { Link } from "react-router-dom";

const LandingPage = (props) => {
  console.log("props", props);
  return (
    <main className="landingPage">
      <hgroup className="landingPage--container">
        <h1>Speak-Easy</h1>
        <h2>Vision: To give people a voice.</h2>
        <p>
          Speak Easy is a communication aid. It learns from your actions to
          provide a speech app that is shaped by you every time you use it. To
          make what you want to say, easy.{" "}
        </p>
        <button className="btn--board">
          <Link to="/board">Let's speak</Link>
        </button>
      </hgroup>
    </main>
  );
};
export default LandingPage;
