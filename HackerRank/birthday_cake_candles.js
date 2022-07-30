// birthday-cake-candles


/*
 * Complete the 'birthdayCakeCandles' function below.
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // Write your code here
  let max = 0; 
  let maxNo = 0; 
  candles.forEach((element) => {
    if(element > max) max = element;
  });

  candles.forEach((element) => {
    if(element === max) maxNo++;
  });
  return maxNo;

}


birthdayCakeCandles([4,2,4,3]);
