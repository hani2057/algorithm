/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const obj = { U: 0, D: 0, L: 0, R: 0 };

  for (const move of moves.split("")) obj[move]++;

  if (obj["U"] === obj["D"] && obj["R"] === obj["L"]) return true;
  else return false;
};

console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));
