import React from "react";
import Hero from "../../components/Hero/Hero";
import New from "../../components/New/New";
import "./Home.css";
import All from "../../components/All/All";

// import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="display">
      <Hero />
      <div className="product-display">
        <h1>NEW</h1>
        <New />
        <All />
      </div>
    </div>
  );
};

export default Home;
