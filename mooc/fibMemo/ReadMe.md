### memoization 


재귀에서 memoization 바이너리 서치 처음 본 것 같다. 
기록해주자 라는 아이디어 하나로 엄청나게 속도를 올려주었다. 
감동적이다. 다음에 비슷하게 활용해보고 싶다. cache를 써서 속도를 올리는 작업 ! 

```js
function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}
 
fibMemo(500);


```