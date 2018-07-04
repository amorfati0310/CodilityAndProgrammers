var majorityElement = function(nums) {
    const length = nums.length
    let result = 0 ;
    const dicNums = nums.reduce((ac, c)=>{
      ac[c] = ac[c] === undefined ? 1 : ac[c]+1
      if(ac[c]>=length/2) result = c;
      return ac 
    },{})
  
    return result;
};

console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([3,2,3]));


var majorityElement = function(nums) {
  let nnDic = {};
  let m2 = (nums.length + 1) >> 1;
  for(let ii = 0; ii < nums.length; ++ii){
      let v = nums[ii];
      let count = nnDic[v] = (nnDic[v] || 0) + 1;
      if(count >= m2){
          return v;
      }
  }
};


var majorityElement = function(nums) {
  let table = {};
  for(let i=0; i<nums.length; i++){
      if(table[nums[i]]){
          table[nums[i]] ++ 
      } else {
          table[nums[i]] = 1;
      }
  }
  
  const majority = nums.length / 2;
  for(let key in table){
      if(table[key] >= majority){
          return +key;
      }
  }
};



var majorityElement = function(nums) {
  let majority = nums[0], count=1;
  
  for (let i=1; i<nums.length; i++){
      if (count==0){
          count++;
          majority=nums[i];
      } else if (nums[i]==majority) count++;
      else count--;
  }
  
  return majority;
};



var majorityElement = function(nums) {
  var num = nums[0], count = 0;
  nums.forEach(val => {
      if (val === num) {
          count ++;
      } else if (count === 0) {
          num = val;
          count = 1;
      } else {
          count --;
      }
  });

  return num;
};

// 첫번째 인자를 받고 count 0 초기값 
// 배열을 돌면서  배열 값이 num이랑 같으면 count 증가 