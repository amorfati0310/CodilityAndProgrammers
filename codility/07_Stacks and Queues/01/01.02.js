// 다시 풀어보기 codility07 


// Stack 이해하기 !!!



//  올라갔다가 내려오면서 해당 높이가 있으면 상쇄 +_+
// 내려왔는데 다시 올라가면 내려온 높이들 사이에 있는 것들은 다시 증가 

//H[I] is the height of the wall from I to I+1 

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  
  const stack = []
  let beforeHeight = 0;
  let count=0;
  for(height of H){
    if(height>beforeHeight){
      couunt+=1  
    }else{
      stack.sort((a,b)=>a-b);
    }
    stack.push(beforeHeight);
    beforeHeight = height;
  }
  console.log(stack);
}
solution([1,2,3,4,2,1])

// solution([8,8,5,7,7,9,8,7,4,8])