import React from "react";
import "./Card.css";

export default function Card({ title, text, direction }) {
  return (
    <>
      <div className="container-card">
        <img className="img-card" src={direction} />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
