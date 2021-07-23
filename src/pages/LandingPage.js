import React from "react";
import { Link } from "react-router-dom";

const LandingPage = (props) => {
  console.log(props);

  return (
    <main className="landingPage">
      <h1>Speak-Easy</h1>
      <hgroup className="landingPage--container">
        <h2>Vision: To give people a voice.</h2>
        <p>
          Speak Easy is a communication aid. It learns from your actions to
          provide a speech app that is shaped by you every time you use it. To
          make what you want to say, easy.{" "}
        </p>
      </hgroup>
      <button>
        <Link to="/board">Let's speak</Link>
      </button>
      {/* <button>
          <Link to="/account">Profile</Link>
        </button> */}
    </main>
  );
};
export default LandingPage;
