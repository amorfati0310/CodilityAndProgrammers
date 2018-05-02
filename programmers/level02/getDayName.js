// 2016년 1월 1일은 금요일입니다. 
// 2016년 A월 B일은 무슨 요일일까요? 
// 두 수 A,B를 입력받아 A월 B일이 무슨 요일인지 출력하는 getDayName 함수를 완성하세요. 
// 요일의 이름은 일요일부터 토요일까지 각각
// SUN,MON,TUE,WED,THU,FRI,SAT를 출력해주면 됩니다.
// 예를 들어 A=5, B=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환하면 됩니다.

function getDayName(a,b){
	const Months = {
		1: 31,
		2: 29,
		3: 31,
		4: 30,
		5: 31,
		6: 30,
		7: 31,
		8: 31,
		9: 30,
		10: 31,
		11: 30,
		12: 31,
	}
	const Days = {
		0:'SUN',
		1:'MON',
		2:'TUE',
		3:'WED',
		4:'THU',
		5:'FRI',
		6:'SAT',
	}
	const lastPoint = 4
	let firstDays = 0;
	for(let i =1; i<a; i++){
		firstDays+=Months[i]
	}
	firstDays+=b
	return Days[(firstDays%7+lastPoint)%7]
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(1,15));
console.log(getDayName(5,24));

// 다른 사람의 풀이 

// function getDayName(a,b){
// 	var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
// 	var date = new Date(`2016-${a}-${b}`);
// 	var day = date.getDay()
// 	return arr[day];
// }

// function getDayName(a,b){
// 	return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
// }