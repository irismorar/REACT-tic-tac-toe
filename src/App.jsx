import { useReducer } from "react";
import "./App.css";
import { ticTacToeReducer } from "./state/ticTacToeReducer";
import { initialState } from "./state/initialState";
import {
  hasPlayer1Won,
  hasPlayer2Won,
  hasGameBeenWon,
  isDraw,
} from "./state/selectors";

export default function App() {
  const [{ moves }, dispatchAction] = useReducer(
    ticTacToeReducer,
    null,
    initialState
  );

  return (
    <main>
      <h1>TIC-TAC-TOE</h1>
      <section className="game_container">
        <div
          className="player-name"
          style={{ color: moves.length % 2 === 0 ? "blue" : "gray" }}
        >
          P1
        </div>
        <section>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((cellIndex) => {
            if (moves.includes(cellIndex)) {
              return (
                <div key={cellIndex}>
                  <span
                    style={{
                      color:
                        moves.indexOf(cellIndex) % 2 === 0 ? "blue" : "salmon",
                    }}
                  >
                    {moves.indexOf(cellIndex) % 2 === 0 ? "x" : "o"}
                  </span>
                </div>
              );
            } else {
              return (
                <div
                  key={cellIndex}
                  onClick={() => {
                    dispatchAction({
                      type: "ADD_MOVE",
                      payload: { cellIndex },
                    });
                  }}
                ></div>
              );
            }
          })}
        </section>
        <div
          className="player-name"
          style={{ color: moves.length % 2 !== 0 ? "salmon" : "gray" }}
        >
          P2
        </div>
      </section>
      <button>restart</button> {/* restart | play again */}
    </main>
  );
}
