// https://leetcode.com/problems/two-sum/description/
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
  const result = []
    for(let i=0; i<nums.length; i++){
      for(let j=i+1; j<nums.length; j++){
        if(nums[i]+nums[j]===target) result.push(i,j) 
      }
    }
  return result;
};


console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 7, 11, 15], 13))
console.log(twoSum([2, 7, 11, 15], 26))
console.log(twoSum([2, 7, 11, 15], 18))

// 16.81%

// 다른 사람의 풀이 

var twoSum = function (nums, target){
  debugger;
  let result = [0,0], map = {};
  for(let i =0; i<nums.length; i++){
      var val = target - nums[i];
      if(map[val] !== undefined){
        result[0] = map[val];
        result[1] = i;
        return result;
      }
      else map[nums[i]] = i;
  }
  return result;
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 7, 11, 15], 13))
console.log(twoSum([2, 7, 11, 15], 26))
console.log(twoSum([2, 7, 11, 15], 18))