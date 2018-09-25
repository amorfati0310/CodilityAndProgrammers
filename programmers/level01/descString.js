function solution(s) {
  const sorted =s.split('').sort((a,b)=>b.charCodeAt()-a.charCodeAt())
  return sorted.join('');
}

console.log(solution('Zbcdefg'))