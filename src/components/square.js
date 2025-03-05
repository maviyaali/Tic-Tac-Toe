// Square.js
import React from "react";

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      aria-label={`Square with value ${value}`}
    >
      {value}
    </button>
  );
}
