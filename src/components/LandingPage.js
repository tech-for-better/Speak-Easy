import React from "react";

export default function LandingPage() {
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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}
        <button>Let's speak</button>
      </header>
    </div>
  );
}
