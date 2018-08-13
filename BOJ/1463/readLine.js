const readline = require('readline'),
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('dynamic 1463 1까지 갯수', function() {
  const d = (n)=> {
    const arr = [0,0];
    for(let i =2; i<=n; i++){
      arr[i] = arr[i-1]+1
      if(i%2===0){
        arr[i] = Math.min(arr[parseInt(i/2)]+1, arr[i])
      }
      else if(i%3===0){
        arr[i] = Math.min(arr[parseInt(i/3)]+1, arr[i])
      }
    }
  return arr[n];
  } 
  console.log(d(3))
  rl.close();
});
