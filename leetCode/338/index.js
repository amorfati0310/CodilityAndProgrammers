var countBits = function(num) {
  const result = [];
  const regex = /1/g
  for(let i=0; i<=num; i++){
    result.push((i).toString(2).match(regex)===null ? 0 : (i).toString(2).match(regex).length)
  }
  return result;
};
console.log(countBits(5));


var countBits = function(num) {
  const dp = [0];
  let delta = 1;
  
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < delta && dp.length < num+1; j++) {
      dp.push(dp[j] + 1);
    }
    delta = delta << 1;
  }
  
  return dp;
};

var countBits = function(num) {
  let res = [0];
  let nearest = 0;
  
  for(let i = 1; i <= num; ++i){
      if((i & (i - 1)) === 0) nearest = i;
      res.push(1 + res[i - nearest]);
  }
  return res;
};



var countBits = function(num) {
  debugger;
  let dp = new Array(num + 1);
  dp.fill(0);
  for (let i = 1 ; i <= num; i++) {
      dp[i] = dp[i & (i-1)] + 1;
  }
  return dp
};
countBits(5)
