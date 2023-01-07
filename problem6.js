// Given an array rectangles where rectangles[i] = [xi, yi, ai, bi] represents an axis-aligned rectangle. The bottom-left point of the rectangle is (xi, yi) and the top-right point of it is (ai, bi).

// Return true if all the rectangles together form an exact cover of a rectangular region.

// Example 1:

// Input: rectangles = [[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]
// Output: true
// Explanation: All 5 rectangles together form an exact cover of a rectangular region.
// Example 2:

// Input: rectangles = [[1,1,2,3],[1,3,2,4],[3,1,4,2],[3,2,4,4]]
// Output: false
// Explanation: Because there is a gap between the two rectangular regions.
// Example 3:

// Input: rectangles = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[2,2,4,4]]
// Output: false
// Explanation: Because two of the rectangles overlap with each other.

// Constraints:

// 1 <= rectangles.length <= 2 * 104
// rectangles[i].length == 4
// -105 <= xi, yi, ai, bi <= 105

/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles = []) {
  const res = isRectangleCoverHelper(0, rectangles);
  return res;
};

const getAllCoordinates = (rectTwoPointCordinates) => {
  const rectAllPointCordinates = [];
  rectAllPointCordinates.push(
    rectTwoPointCordinates[0] + "," + rectTwoPointCordinates[1]
  );
  rectAllPointCordinates.push(
    rectTwoPointCordinates[0] + "," + rectTwoPointCordinates[3]
  );
  rectAllPointCordinates.push(
    rectTwoPointCordinates[2] + "," + rectTwoPointCordinates[1]
  );
  rectAllPointCordinates.push(
    rectTwoPointCordinates[2] + "," + rectTwoPointCordinates[3]
  );
  return rectAllPointCordinates;
};

const isRectangleCoverHelper = (baseRect, rectangles) => {
  if (baseRect >= rectangles.length) {
    console.log("true");
    return true;
  }
  const baseRectAllPointCoordinates = getAllCoordinates(rectangles[baseRect]);
  let matchedCount = 0;
  //   console.log("rect", rectangles.length, "Count", matchedCount)
  for (let i = 0; i < rectangles.length; i++) {
    if (i === baseRect) {
      continue;
    }
    const comparativeRect = getAllCoordinates(rectangles[i]);
    if (comparativeRect.indexOf(baseRectAllPointCoordinates[0]) !== -1) {
      matchedCount += 1;
      console.log(
        "Matched",
        baseRectAllPointCoordinates[0],
        comparativeRect,
        "Count",
        matchedCount
      );
    }
    if (comparativeRect.indexOf(baseRectAllPointCoordinates[1]) !== -1) {
      matchedCount += 1;
      console.log(
        "Matched",
        baseRectAllPointCoordinates[1],
        "Count",
        matchedCount
      );
    }
    if (comparativeRect.indexOf(baseRectAllPointCoordinates[2]) !== -1) {
      matchedCount += 1;
      console.log(
        "Matched",
        baseRectAllPointCoordinates[2],
        "Count",
        matchedCount
      );
    }
    if (comparativeRect.indexOf(baseRectAllPointCoordinates[3]) !== -1) {
      matchedCount + 1;
      console.log(
        "Matched",
        baseRectAllPointCoordinates[03],
        "Count",
        matchedCount
      );
    }
  }
  // console.log(matchedCount, "COunt");
  if (matchedCount < 3) {
    console.log("Not forming atriangle");
    return false;
  }
  matchedCount = 0;
  console.log("RESET", matchedCount);
  return isRectangleCoverHelper(baseRect + 1, rectangles);
};
