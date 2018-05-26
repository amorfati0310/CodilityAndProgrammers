// bit로 되었을 때 2개의 차이 

// 12.toString(2)
// VM58691:1 Uncaught SyntaxError: Invalid or unexpected token
// var a = 12
// undefined
// a.toString(12)
// "10" 변수로 접근했을 때는 메소드 12로 바로 접근하면 toString method를 쓸 수가 없다 그냥 참고

const hammingDistance = function(x, y) {
  if(x===y) return 0;
  let bigger, smaller
  if(x>y){
    bigger = x; 
    smaller = y;
  } 
  else {
    bigger = y; 
    smaller = x;
  }
  const biggerBinary = bigger.toString(2)
  let smallerBinary = smaller.toString(2)
  // 자리수 맞춰주기   
  const biggerLength = biggerBinary.length;
  const smallerLength = smallerBinary.length
  if(biggerLength!==smallerLength){
    const gap =biggerLength-smallerLength;
    smallerBinary='0'.repeat(gap)+smallerBinary
  }
  let count = 0;
  for(let i =0; i<biggerLength; i++){
    if(smallerBinary[i]!==biggerBinary[i])count+=1
  }
  return count;
};
console.log(hammingDistance(4,14));