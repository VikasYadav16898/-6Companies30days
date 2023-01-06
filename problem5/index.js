// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.
// Example 2:

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 2 * 109
// All the integers in nums are unique.

let subArray = [];
var largestDivisibleSubset = async function (nums) {
  helperFunction(nums, nums.length - 1)
    .then((res) => {
      console.log("res", res);
    })
    .catch((e) => console.log(e));
};

const helperFunction = (nums, lastIndex) => {
  return new Promise((res) => {
    let bufferArray = [];
    let localLastIndex = lastIndex;
    if (localLastIndex === 0 || subArray.length > localLastIndex) {
      console.log(subArray);
      return res(1);
    }
    for (let i = lastIndex; i >= 0; i--) {
      if (nums[localLastIndex] % nums[i] === 0) {
        bufferArray.unshift(nums[i]);
        localLastIndex = i;
      }
    }
    if (bufferArray.length >= subArray.length) {
      subArray = bufferArray;
    }
    helperFunction(nums, lastIndex - 1);
  });
};

largestDivisibleSubset([4, 5, 6, 7, 8]);
