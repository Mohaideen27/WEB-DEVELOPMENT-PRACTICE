import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://rewirenow.com/app/uploads/2026/03/markus-spiske-cvBBO4PzWPg-unsplash.jpg"
        alt=""
        width="100px"
      />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
