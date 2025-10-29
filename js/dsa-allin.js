// Brute Force
function findMaxArray(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
}

console.log(findMaxArray([-2, 11, -4, 13, -5, 2]));
