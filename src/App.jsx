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
  const [state, dispatchAction] = useReducer(
    ticTacToeReducer,
    null,
    initialState
  );
  const { moves } = state;

  return (
    <main>
      <h1>TIC-TAC-TOE</h1>
      {hasPlayer1Won(state) && (
        <div>
          GAME OVER! <br />
          Player 1 wins!
        </div>
      )}
      {hasPlayer2Won(state) && (
        <div>
          GAME OVER! <br />
          Player 2 wins!
        </div>
      )}
      {isDraw(state) && (
        <div>
          GAME OVER! <br />
          DRAW!
        </div>
      )}
      <section className="game_container">
        <div
          className="player_name"
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
                    if (hasPlayer1Won(state) || hasPlayer2Won(state)) {
                      return;
                    }
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
          className="player_name"
          style={{ color: moves.length % 2 !== 0 ? "salmon" : "gray" }}
        >
          P2
        </div>
      </section>
      <button
        onClick={() => {
          dispatchAction({
            type: "RESTART",
          });
        }}
      >
        {hasGameBeenWon(state) || isDraw(state) ? "play again" : "restart"}
      </button>{" "}
    </main>
  );
}
