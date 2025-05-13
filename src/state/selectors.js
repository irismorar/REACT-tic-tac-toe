export function getPlayer1Moves(state) {
  const evenIndexMoves = state.filter((_, index) => index % 2 === 0);
  return evenIndexMoves;
}

export function hasPlayer1Won(state) {
  const moves = getPlayer1Moves(state);
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

export function getPlayer2Moves(state) {
  const oddIndexMoves = state.filter((_, index) => index % 2 !== 0);
  return oddIndexMoves;
}

export function hasPlayer2Won(state) {
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

export function hasGameBeenWon(state) {
  return hasPlayer1Won(state) || hasPlayer2Won(state);
}

export function isDraw(state) {
  return state.length === 9 && !hasGameBeenWon(state);
}
