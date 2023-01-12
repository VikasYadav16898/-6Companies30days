// 334. Increasing Triplet Subsequence
// Medium
// 6.1K
// 268
// Companies
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  helperIncreasingTriplet(0, 1, nums);
};

const helperIncreasingTriplet = (primaryIndex, secondaryIndex, nums) => {
  if (primaryIndex > nums.length - 2) {
    console.log("END");
    return "Not Found";
  }
  if (secondaryIndex === nums.length - 1) {
    return helperIncreasingTriplet(primaryIndex + 1, primaryIndex + 2, nums);
  }

  for (let i = secondaryIndex + 1; i < nums.length; i++) {
    console.log(nums[primaryIndex], nums[secondaryIndex], nums[i]);
    console.log("a");
    if (i === primaryIndex || i === secondaryIndex) {
      continue;
    }
    if (
      nums[primaryIndex] < nums[secondaryIndex] &&
      nums[secondaryIndex] < nums[i]
    ) {
      console.log("FOUND");
      return "found";
    }

    return helperIncreasingTriplet(primaryIndex, secondaryIndex + 1, nums);
  }
};

const res = increasingTriplet([2, 1, 5, 0, 4, 6]);
console.log(res);
