import React from "react";

const Home = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", marginTop: "10rem" }}>
      <h1 style={{ fontSize: "3em" }}>
        Bienvenido a <b>Happy Cake</b>
      </h1>
      <br />
      <p style={{ fontSize: "1.5em" }}>El lugar de los pasteles felices</p>
      <p className="animated-emoji">🎂</p>
    </div>
  );
};

export default Home;
