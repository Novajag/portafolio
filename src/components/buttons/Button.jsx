import React from "react";
import "./Button.css";

export default function Button({ children, text, type, typ, onClick }) {
  return (
    <>
      <button type={typ} onClick={onClick} className={`button ${type}`}>
        {children || text}
      </button>
    </>
  );
}
