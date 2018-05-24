

function solution(S) {
  debugger;
  const commands = S.split(' ');
  const stack = [];
  console.log(commands);
  const commandMethods = {
    'DUP': ()=>stack.push(stack[stack.length-1]),
    'POP': ()=>stack.pop(),
    '+': ()=>stack.push(stack.pop()+stack.pop()),
    '-': ()=>stack.push(stack.pop()-stack.pop()),
  };
  console.log(stack);
  for(command of commands){
    debugger;
    if(commandMethods[command]===undefined) stack.push(Number(command))
    else {
      commandMethods[command]();
    }
    console.log('stack', stack);
  }
  return stack[stack.length-1] > 0  ? stack.pop() : -1
  // write your code in JavaScript (Node.js 8.9.4)
}

const exmplaeCase = "13 DUP 4 POP 5 DUP + DUP + -";
const exmplaeCase2 = "5 6 + -";
const exmplaeCase3 = "3 DUP 5 - -";
console.log(solution(exmplaeCase));
console.log(solution(exmplaeCase2));
console.log(solution(exmplaeCase3));




function solution(S) {
  const commands = S.split(' ');
  const stack = [];
  const commandMethods = {
    'DUP': ()=>stack.push(stack[stack.length-1]),
    'POP': ()=>stack.pop(),
    '+': ()=>stack.push(stack.pop()+stack.pop()),
    '-': ()=>stack.push(stack.pop()-stack.pop()),
  };
  for(command of commands){
    debugger;
    if(commandMethods[command]===undefined) stack.push(Number(command))
    else {
      commandMethods[command]();
    }
  }
  return stack[stack.length-1] > 0  ? stack.pop() : -1
  // write your code in JavaScript (Node.js 8.9.4)
}