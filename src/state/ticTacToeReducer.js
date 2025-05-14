import { initialState } from "./initialState";

export function ticTacToeReducer(state, { type: actionType, payload }) {
  switch (actionType) {
    case "ADD_MOVE": {
      const { cellIndex } = payload;

      return {
        ...state,
        moves: [...state.moves, cellIndex],
      };
    }
    case "RESTART": {
      return initialState();
    }
  }
}
