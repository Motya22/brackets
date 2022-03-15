module.exports = function check(str, bracketsConfig) {
  const brackets = str.split('');
  const stack = [];
	
  for (const bracket of brackets) {
    const lastOfStack = stack[stack.length - 1];
    const neededPair = bracketsConfig.find((bracketsPair) => bracketsPair[0] === lastOfStack);
        
    if (stack.length && neededPair && bracket === neededPair[1]) {
      stack.pop();
    } else  {
      stack.push(bracket);
    }
  }
  
  return !Boolean(stack.length);
}
