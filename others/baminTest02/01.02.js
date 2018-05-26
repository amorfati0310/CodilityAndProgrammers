const chunk ="6 1 1 1"
var numbers = chunk.toString().split(" ");
var n = numbers[0];
var d = numbers[1];
var k = numbers[2];
var j = numbers[3];

function getWinner(n,d,k,j){
  const peopleState =[...Array(n).keys()].reduce((ac,c)=> {
    ac[c+1]=c+1;
    return ac;
  },{})
  let startPoint = 1;
  let now = startPoint
  let restStep = k;  
  let step = d ===0 ? -1 : 1 
  for(let i =0; i<n-1; i++){
    while(restStep!==0){
      now+=step
      if(now>n) now=1
      if(now<1) now=n
      if(peopleState[now]!=="탈락") restStep-=1
    }
    peopleState[now]="탈락"
    k+=j
    restStep+=k
  }  
  console.log(peopleState);
  for(let i =1; i<=n; i++){
    if(peopleState[i]!=="탈락") return i;
  }
}


console.log(getWinner(n,d,k,j));
console.log(getWinner(4,0,2,2)); 