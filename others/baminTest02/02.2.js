function getEvenOver(str){
  var numbers= str.replace(/[^0-9]/g,"");
  const numbersList = numbers.split("")
  const sections =numbersList.slice(1)
  let result = ""
  result+=`(-, `
  const sectionState = sections.map((v,i)=>{
    return i%2===0 ? {number: +v, state: 'open'} : {number: +v, state: 'close'}
  }).sort((a,b)=> a.number>b.number)
  
  let overCount = 0;
  let evenState = false;
  let nowState ;
  for(let i =0; i<sectionState.length; i++){
    if(evenState){
      result+=`(${sectionState[i].number}, `
    }
    else {
      result+=`${sectionState[i].number})\n`
    } 
    if(sectionState[i].state) overCount+=1
    if(overCount%2!==0) evenState = true;
    else evenState = false;  
  }
  result+=`+)`
  return result;
}


var str ="3\n 1 2\n 1 4\n 2 4\n"
console.log(getEvenOver(str)); 
