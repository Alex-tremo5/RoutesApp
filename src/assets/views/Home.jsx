import React from "react";

const Home = () => {
  return (
    <>
      <div className="containerr home">
        <h1 className="title">
          Bienvenido a <b>Happy Cake</b>{" "}
        </h1>
        <p>El lugar de los pasteles felices</p>
        <img id="cake" src="src/assets/img/cake.png" alt="cake" />
      </div>
    </>
  );
};

export default Home;
