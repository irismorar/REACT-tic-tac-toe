import "./App.css";
import { initialState } from "./state/initialState";

function getPlayer1Moves(state) {
  const evenIndexMoves = state.filter((_, index) => index % 2 === 0);
  return evenIndexMoves;
}

function hasPlayer1Won(state) {
  const moves = getPlayer1Moves(state);
  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let winningMove of winningMoves) {
    for (let elementMove of moves) {
      if (winningMove.includes(elementMove)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function getPlayer2Moves(state) {
  const oddIndexMoves = state.filter((_, index) => index % 2 !== 0);
  return oddIndexMoves;
}

function hasPlayer2Won(state) {
  const moves = getPlayer2Moves(state);
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const winningCombination of winningCombinations) {
    if (movesIncludeCombination(moves, winningCombination)) {
      return true;
    }
  }
  return false;
}

function movesIncludeCombination(playerMoves, combination) {
  for (const combinationPosition of combination) {
    if (!playerMoves.includes(combinationPosition)) {
      return false;
    }
  }
  return true;
}

function hasGameBeenWon(state) {
  return hasPlayer1Won(state) || hasPlayer2Won(state);
}

function isDraw(state) {
  return state.length === 9 && !hasGameBeenWon(state);
}

export default function App() {
  return (
    <main>
      <h1>TIC-TAC-TOE</h1>
      <section className="game_container">
        <div>Player 1</div>
        <section></section>
        <div>Player 2</div>
      </section>
      <button>restart</button> {/* restart | play again */}
    </main>
  );
}
