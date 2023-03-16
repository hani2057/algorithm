/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (paren of s) {
    if (paren === "(" || paren === "{" || paren === "[") stack.push(paren);
    else if (!stack.length) return false;
    else {
      const left = stack.pop();
      if (
        (left === "(" && paren === ")") ||
        (left === "{" && paren === "}") ||
        (left === "[" && paren === "]")
      )
        continue;
      else return false;
    }
  }

  if (stack.length) return false;

  return true;
};
