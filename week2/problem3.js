// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// Example 1:

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Example 3:

// Input: n = 0
// Output: 0

// Constraints:

// 0 <= n <= 104

// Follow up: Could you write a solution that works in logarithmic time complexity?

// TODO: Can solve scientific writing notation of bigInts.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  const res = calculateFactorial(n);
  return countZeros(res);
};

const calculateFactorial = (num) => {
  if (num === 0) {
    return 1;
  }

  return num * calculateFactorial(num - 1);
};

const countZeros = (num) => {
  let count = 0;
  while (num % 10 === 0) {
    num = num / 10;
    count++;
  }
  console.log(count, "ZEROS");
  return count;
};
