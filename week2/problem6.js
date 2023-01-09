// You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

// Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.

// Example 1:

// Input: cards = [3,4,2,3,4,7]
// Output: 4
// Explanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.
// Example 2:

// Input: cards = [1,0,5,3]
// Output: -1
// Explanation: There is no way to pick up a set of consecutive cards that contain a pair of matching cards.

// Constraints:

// 1 <= cards.length <= 105
// 0 <= cards[i] <= 106

// ! Can Be Optimized very much

/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  let minCards = Infinity;
  const dict = {};
  let isDoublePresent = false;

  for (let i = 0; i < cards.length; i++) {
    dict[cards[i]] = dict[cards[i]] || [];
    dict[cards[i]].push(i);
    if (dict[cards[i]].length >= 2) {
      isDoublePresent = true;
    }
  }

  if (!isDoublePresent) {
    return -1;
  }
  //   console.log(dict);

  for (const i in dict) {
    if (dict[i].length === 1) {
      continue;
    }
    const localMin = calculateMin(dict[i]);
    if (localMin < minCards) {
      minCards = localMin;
    }
  }
  return minCards + 1;
};

const calculateMin = (arr) => {
  //   console.log(arr, "arr");
  let min = Infinity;
  arr.forEach((num, index) => {
    if (index >= arr.length - 1) {
    } else {
      if (Math.abs(arr[index + 1] - num) < min) {
        min = Math.abs(arr[index + 1] - num);
      }
    }
  });
  return min;
};
