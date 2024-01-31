import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // };
  return (
    <a href={props.link}>
      <div className="card">
        <img className="image" src={props.images} alt="" />

        <h2>{props.title}</h2>
      </div>
    </a>
  );
};

export default Card;
