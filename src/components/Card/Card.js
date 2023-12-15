import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <Link to={`/product/${props.id}`}>
        <img className="image" src={props.images} alt="" />
      </Link>
      <p>{props.title}</p>
      <div className="card-prices">
        <p className="price"> $ {props.price}</p>
      </div>
    </div>
  );
};

export default Card;
