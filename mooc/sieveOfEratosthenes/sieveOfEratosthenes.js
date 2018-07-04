// 1. prime Number를 구하려면 ... 음 2번 나눠지면 안 된다. 1과 자기 자신만 고로 나눠지는 것이 있으면 안 됨 ! 
//  

function sieveOfEratosthenes(n){
  const primeList = [];
  for(let i =2; i<=n; i++){
    debugger;
    if(isPrime(i)) primeList.push(i)
  }
  function isPrime(n){
    let primeNumber = true
    debugger;
      if(n===2) return primeNumber
      for(let i=2; i<n; i++){
        if(n%i===0) return primeNumber=false 
      }
    return primeNumber
  }
  return primeList;
}

console.log(sieveOfEratosthenes(100));

// 강의 답
// 1. 우선 상태값들을 집어 넣음 prime은  true 


function sieveOfEratosthenes(n){
  var primes = [];
  for(let i =0; i<=n; i++){
    primes[i] = true
  }

  primes[0] = false;
  primes[1] = false;

  // 2. math.sqrt를 이용한다 왜 해주었을까?
  // let j=2; j*i<=n; j++
  //  i 18 4 까지     4*1*2*3 
  for(let i = 2; i<=Math.sqrt(n); i++){
    for(let j=2; j*i<=n; j++){
      primes[i*j] = false;
    }
  }
  const result = [];
  for(let i =0; i<primes.length; i++){
    if(primes[i]) result.push(i);
  }
  return result;
}
console.log(sieveOfEratosthenes(100));