// For num = 5 you should return [0,1,1,2,1,2].


var countBits = function(num) {
  let res=[]
  for(let i=0; i<=num; i++) {
    debugger;
      let c=0
      for(let v=i;v;c++) v&=v-1
      res.push(c)
  }
  return res
};

// var countBits = function(num) {
//   debugger;
//   let dp = new Array(num + 1);
//   dp.fill(0);
//   for (let i = 1 ; i <= num; i++) {
//       dp[i] = dp[i & (i-1)] + 1;
//   }
//   return dp
// };
countBits(5);