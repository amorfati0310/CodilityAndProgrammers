

function solution(participant, completion) { 
    const completionObj = completion.reduce((ac, c)=>{
      if(ac[c]===undefined) ac[c]=1;
      else ac[c]+=1;
      return ac;
    },{})  
    
    for(let person of participant){
        if(completionObj[person]){
          completionObj[person]-=1;
        }
        else return person;
    }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']))
console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'],['josipa', 'nikola', 'marina', 'filipa']))
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))