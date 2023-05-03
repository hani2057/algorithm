/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
console.log(
  reverseString([
    "A",
    " ",
    "m",
    "a",
    "n",
    ",",
    " ",
    "a",
    " ",
    "p",
    "l",
    "a",
    "n",
    ",",

    " ",
    "a",

    " ",
    "c",
    "a",
    "n",
    "a",
    "l",
    ":",
    " ",
    "P",
    "a",
    "n",
    "a",
    "m",
    "a",
  ])
);
