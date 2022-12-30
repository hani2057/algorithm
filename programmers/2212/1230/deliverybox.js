function solution(order) {
  const stack = [];

  let idx = 0;
  for (let i = 1; i <= order.length; i++) {
    stack.push(i);
    
    while (stack.length > 0 && stack[stack.length - 1] === order[]) {
      stack.pop();
      idx++;
    }
  }

  return idx;
}