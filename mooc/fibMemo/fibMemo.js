function fibMemo(n, cache){
  cache = cache || []
  debugger;
  let result;
  if(cache[n]) return cache[n]
  else{
    if(n<=2) return 1
    else{
      return cache[n] = fibMemo(n-2, cache)+fibMemo(n-1, cache) 
    } 
  }
}

console.log(fibMemo(3))
console.log(fibMemo(4))
console.log(fibMemo(5))
console.log(fibMemo(100))


// function fibMemo(index, cache) {
//   cache = cache || [];
//   if (cache[index]) return cache[index];
//   else {
//     if (index < 3) return 1;
//     else {
//       cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
//     }
//   }
//   return cache[index];
// }
 
// fibMemo(500);