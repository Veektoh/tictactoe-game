import React from "react";
import "./Square.css";

function Square({ value, onSquareClick }) {
  return (
    <div>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </div>
  );
}

export default Square;
