// 어떤 수를 입력받아 그 수의 약수를 모두 더한 수 sumDivisor 함수를 완성해 보세요. 
// 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환해 주면 됩니다.

// 디자인 
// 1부터 나눠주면서 나눠지면 sum을 한다 
// 조금 더 효율적인 방법 없을까?
// 자기 자신 과 1은 고정이므로 1,num은 더한채로  순회하는 과정은 2와 num/2까지만 하는 것이 더 날 것 같다
function sumDivisor(num) {
    let sum = 0;
    sum+=1+num
    for(let i =2; i<=num/2; i++){
        if(num%i===0) sum+=i
    }
	return sum;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumDivisor(12));

// 프로그래머스 아쉬운 점 ! 인기 풀이가 제일 상단으로 고정되었으면 좋겠다. 

// 다른 사람 풀이 중 특이했던 것 

// sqrt 제곱근을 해줘서 제곱근 중에 나눠지는 것이 약수들 나머지는 이 약수들의 조합 

// function sumDivisor(num) {
//     var d1=[];
//   var sqrt=Math.sqrt(num);
//   for(var i=1; i<sqrt; i++){
//     if(num%i==0) d1.push(i)
//   }

//   var d2=d1.map(v=>num/v)
//     return d1.reduce((a,b)=>a+b)+d2.reduce((a,b)=>a+b);
// }