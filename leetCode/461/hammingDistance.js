// bit로 되었을 때 2개의 차이 

// 12.toString(2)
// VM58691:1 Uncaught SyntaxError: Invalid or unexpected token
// var a = 12
// undefined
// a.toString(12)
// "10" 변수로 접근했을 때는 메소드 12로 바로 접근하면 toString method를 쓸 수가 없다 그냥 참고

// 배운 점  x^y.toString(2)를 하게 되면 y.toString부터 하게 된다

//https://regexr.com/
const hammingDistance = function(x, y) {
  if(x===y) return 0;
  let checkdiff = (x^y).toString(2)
  const regex = /([1{1}])/g;
  return checkdiff.match(regex).length
};
console.log(hammingDistance(16,2));