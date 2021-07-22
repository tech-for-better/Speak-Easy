import React from "react";
import { Link } from "react-router-dom";

const LandingPage = (props) => {
  console.log(props);

  return (
    <div>
      <header className="App-header">
        <h1>Speak-Easy</h1>
        <div className="container">
          <h2>Vision: To give people a voice.</h2>
          <p>
            Speak Easy is a communication aid. It learns from your actions to
            provide a speech app that is shaped by you every time you use it. To
            make what you want to say, easy.{" "}
          </p>
        </div>
        <button>
          <Link to="/board">Let's speak</Link>
        </button>
       
      </header>
    </div>
  );
};
export default LandingPage;
