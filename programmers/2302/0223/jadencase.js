function solution(s) {
  const arr = s.toLowerCase().split(" ");

  const newArr = arr.map((word) => {
    if (word.length) return word[0].toUpperCase() + word.slice(1, word.length);
  });

  return newArr.join(" ");
}

console.log("2people   unfollowed".split(" "));

const s1 = "3people unFollowed me";
const s2 = "for the last week";

console.log(solution(s1)); // "3people Unfollowed Me"
console.log(solution(s2)); // "For The Last Week"
