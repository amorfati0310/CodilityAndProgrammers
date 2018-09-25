function solution(n, m) {
  const min = Math.min(n,m)
  let gcd = 1;
  for(let i=min; i>=2; i--){
      if(n%i===0 && m%i===0){
          gcd=i;
          break;
      }
  }
  let lcb = n*m/gcd
  var answer = [gcd, lcb];
  return answer;
}
console.log(solution(3,12));