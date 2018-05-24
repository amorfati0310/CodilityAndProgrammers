// profit I could have made from one purchase
// and one sale of one share of Apple stock yesterday.

function getMaxProfit(stockPrices) {

  // Calculate the max profit
  const lastStack = [];
  let maxProfit;
  // 자기 자신이랑 이전 값 중에서 가장 큰 차이가 나는 값을 구하면
  for(let i =0; i<stockPrices.length-1; i++){
    lastStack.push(stockPrices[i])
    const right = stockPrices.slice(i+1)
    const sales = Math.max(...right)
    const purchase = Math.min(...lastStack)
    const profit = sales-purchase;
    if(maxProfit===undefined) maxProfit = profit
    if(maxProfit<profit) maxProfit = profit
  }
  if(maxProfit===undefined) throw Error('short');
  return maxProfit 
}

console.log(getMaxProfit([10, 7, 5, 8, 11, 9])); // return 6

desc = 'one price throws error';
const onePrice = () => (getMaxProfit([1]));
assertThrowsError(onePrice, desc);

desc = 'empty array throws error';
const emptyArray = () => (getMaxProfit([]));
assertThrowsError(emptyArray, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log('a',a,'b',b)
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}


function getMaxProfit(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  // We'll greedily update minPrice and maxProfit, so we initialize
  // them to the first price and the first possible profit
  let minPrice = stockPricesYesterday[0];
  let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  // Start at the second (index 1) time
  // We can't sell at the first time, since we must buy first,
  // and we can't buy and sell at the same time!
  // If we started at index 0, we'd try to buy *and* sell at time 0.
  // this would give a profit of 0, which is a problem if our
  // maxProfit is supposed to be *negative*--we'd return 0.
  for (let i = 1; i < stockPricesYesterday.length; i++) {
    const currentPrice = stockPricesYesterday[i];

    // See what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);

    // Update minPrice so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}


// Tests

let desc = 'price goes up then down';
let actual = getMaxProfit([1, 5, 3, 2]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'price goes down then up';
actual = getMaxProfit([7, 2, 8, 9]);
expected = 7;
assertEqual(actual, expected, desc);

desc = 'price goes up all day';
actual = getMaxProfit([1, 6, 7, 9]);
expected = 8;
assertEqual(actual, expected, desc);

desc = 'price goes down all day';
actual = getMaxProfit([9, 7, 4, 1]);
expected = -2;
assertEqual(actual, expected, desc);

desc = 'price stays the same all day';
actual = getMaxProfit([1, 1, 1, 1]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'one price throws error';
const onePrice = () => (getMaxProfit([1]));
assertThrowsError(onePrice, desc);

desc = 'empty array throws error';
const emptyArray = () => (getMaxProfit([]));
assertThrowsError(emptyArray, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}