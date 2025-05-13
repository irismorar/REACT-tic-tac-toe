import { useReducer } from "react";
import "./App.css";
import { ticTacToeReducer } from "./state/ticTacToeReducer";
import { initialState } from "./state/initialState";
import {
  getPlayer1Moves,
  getPlayer2Moves,
  hasPlayer1Won,
  hasPlayer2Won,
  hasGameBeenWon,
  isDraw,
} from "./state/selectors";

export default function App() {
  const [state, dispatchAction] = useReducer(
    ticTacToeReducer,
    null,
    initialState
  );
  const boardState = createBoardState(state);

  return (
    <main>
      <h1>TIC-TAC-TOE</h1>
      <section className="game_container">
        <div>Player 1</div>
        <section>
          {boardState.map((_, moveIndex) => {
            if (boardState.includes(moveIndex)) {
              return (
                <div key={moveIndex}>
                  <span
                    style={{
                      color: moveIndex % 2 === 0 ? "blue" : "salmon",
                    }}
                  >
                    {moveIndex % 2 === 0 ? "x" : "o"}
                  </span>
                </div>
              );
            } else {
              return <div key={moveIndex}></div>;
            }
          })}
        </section>
        <div>Player 2</div>
      </section>
      <button>restart</button> {/* restart | play again */}
    </main>
  );
}

function createBoardState(state) {
  const { moves } = state;
  const boardState = [];
  for (let i = 0; i <= 8; i++) {
    if (typeof moves[i] === "number") {
      boardState[i] = moves[i];
    } else {
      boardState[i] = null;
    }
  }
  return boardState;
}
