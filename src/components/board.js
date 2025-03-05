// Board.js
import React from "react";
import Square from "./square";
import calculateWinner from "../utils/calculateWinner";

export default function Board({ xIsNext, squares, onPlay, onRestart }) {
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
    <div className="board-container">
      <h1 className="game-title">Tic-Tac-Toe</h1>
      <h2 className="status-text">{status}</h2>
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <Square
                  key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                />
              );
            })}
          </div>
        ))}
      </div>
      <button className="restart-button" onClick={onRestart}>
        Restart Game
      </button>
    </div>
  );
}
