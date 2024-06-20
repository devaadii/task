import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import "./index.css";
import Hero from "./components/Hero";
import Secondpage from "./components/Secondpage";
import Cards from "./components/Cards";
import CardCarousel from "./components/CardCarousel";
import Technologies from "./components/Technologies";
import Flow from "./components/Flow";
import FlowCarousel from "./components/FlowCarousel";
import vector from "../src/vector/image.png";
import smallArrow from "../src/icons/image copy 2.png";

function App() {
  return (
    <>
      {" "}
      <Nav />
      <Hero />
      <Secondpage />
      <Cards />
      <CardCarousel />
      <Technologies />
      <Flow />
      <FlowCarousel />
    </>
  );
}

export default App;
