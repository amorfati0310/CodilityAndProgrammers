function getDay(a,b){
  if(a<=0||b<=0) throw new Error('0 보다 큰 수 월 날짜를 입력해주세요')
  const Months = [31,29,31,30,31,30,31,31,30,31,30,31]
  const Days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
	const lastPoint = 4
  let firstDays = 0;
  
  const sumLastMonthDays = Months.slice(0,a-1).reduce((ac,c)=> ac+c, 0)
	return Days[(sumLastMonthDays+lastPoint+b)%7]
}

console.log(getDay(5,24));