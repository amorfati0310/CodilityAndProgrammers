const isAnagram = (s1, s2)=> {
  if(s1.length!==s2.length) return false

  const s1Dic = s1.split('').reduce((ac, c)=>{
     if(ac[c]===undefined) ac[c]=1;
     ac[c]+=1
     return ac
  },{})

  const s2Dic = s2.split('').reduce((ac, c)=>{
    if(ac[c]===undefined) ac[c]=1;
    ac[c]+=1
    return ac
 },{})

  for(let key in s1Dic){
    if(s2Dic[key]===undefined) return false
    else {
      if(s2Dic[key]!==s1Dic[key]) return false
    }
  }
  return true
}
console.log(isAnagram("문전박대", "대박전문"))
console.log(isAnagram("문전박", "대박전문"))
console.log(isAnagram("문전박대", "전대미문"))
console.log(isAnagram("문전박대", "박대전"))

// 같은 거 갯수에 따라서 달라져서 