import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import "./index.css";
import Hero from "./components/Hero";
import Secondpage from "./components/Secondpage";
import Cards from "./components/Cards";

import Technologies from "./components/Technologies";
import Flow from "./components/Flow";

function App() {
  return (
    <>
      {" "}
      <Nav />
      <Hero />
      <Secondpage />
      <Cards />
      <Technologies />
      <Flow />
    </>
  );
}

export default App;
