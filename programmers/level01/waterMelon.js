// water_melon함수는 정수 n을 매개변수로 입력받습니다.
// 길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하세요.

// 예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴하면 됩니다.


function waterMelon(n){
    let result = ""
    result+= n%2===0 ? '수박'.repeat(parseInt(n/2)) : '수박'.repeat(parseInt(n/2))+'수'
    return result;
  }
  
 // 다른사람 풀이   result = result.repeat(n-1).substring(0,n);
 // 양이 커지는 대신 조건문이 없는 경우 substring 0,n slice랑 비슷한 건가 

 // substring과 slice차이 거의 비슷하다 
 // https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring

  // 실행을 위한 테스트코드입니다.
  console.log("n이 3인 경우: "+ waterMelon(3))
  console.log("n이 4인 경우: "+ waterMelon(4))