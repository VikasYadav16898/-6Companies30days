// Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.

// The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.

// A valid square has four equal sides with positive length and four equal angles (90-degree angles).

// Example 1:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: true
// Example 2:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
// Output: false
// Example 3:

// Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
// Output: true

// Constraints:

// p1.length == p2.length == p3.length == p4.length == 2
// -104 <= xi, yi <= 104

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
let dict = {};
let sideLength = 0;
let diagonalLength = 0;
const checkLengthEqual = (p1, p2, p3, p4) => {
  const p1p2Lenghth = Math.sqrt(
    Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2)
  );
  const p1p3Lenghth = Math.sqrt(
    Math.pow(p3[0] - p1[0], 2) + Math.pow(p3[1] - p1[1], 2)
  );
  const p1p4Lenghth = Math.sqrt(
    Math.pow(p4[0] - p1[0], 2) + Math.pow(p4[1] - p1[1], 2)
  );
  const p2p3Lenghth = Math.sqrt(
    Math.pow(p3[0] - p2[0], 2) + Math.pow(p3[1] - p2[1], 2)
  );
  const p2p4Lenghth = Math.sqrt(
    Math.pow(p4[0] - p2[0], 2) + Math.pow(p4[1] - p2[1], 2)
  );
  const p3p4Lenghth = Math.sqrt(
    Math.pow(p4[0] - p3[0], 2) + Math.pow(p4[1] - p3[1], 2)
  );

  let tempLenghtArray = [
    p1p2Lenghth,
    p1p3Lenghth,
    p1p4Lenghth,
    p2p3Lenghth,
    p2p4Lenghth,
    p3p4Lenghth,
  ];

  tempLenghtArray.forEach((length, index) => {
    dict[length] = (dict[length] || 0) + 1;
  });
  console.log(dict);
  let diagPresent = false;
  let sidePresent = false;

  for (let length in dict) {
    if (dict[length] === 4) {
      sidePresent = length;
    } else if (dict[length] === 2) {
      diagPresent = length;
    } else {
      console.log("NEW FALSE");
      return false;
    }
  }

  console.log(diagPresent, sidePresent);
  if (diagPresent > sidePresent) {
    console.log(true);
    console.log(diagPresent, "diag");
    return true;
  }
  console.log(false);
  return false;
};

checkLengthEqual([0, 0], [1, 1], [1, 0], [0, 1]);
