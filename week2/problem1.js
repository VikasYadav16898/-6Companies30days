/**
 * @param {number[][]} points
 * @return {number}
 */
let maxColinearCount = 2;
var maxPoints = function (points) {
  if (points.length === 0 || points.length === 1) {
    return 1;
  }
  if (points.length === 2) {
    return 2;
  }

  const res = maxPointsHelper(0, 1, points);
  return res;
};
const maxPointsHelper = (baseCoOrdinate, secondBaseCordinate, points) => {
  if (baseCoOrdinate >= points.length - 2) {
    console.log("Count", maxColinearCount);
    return maxColinearCount;
  }

  let localMaxColinearCount = 2;
  for (let i = 0; i < points.length; i++) {
    if (i === baseCoOrdinate || i == secondBaseCordinate) {
      continue;
    }
    const isCoLinear = checkCoLinear(
      points[baseCoOrdinate][0],
      points[baseCoOrdinate][1],
      points[secondBaseCordinate][0],
      points[secondBaseCordinate][1],
      points[i][0],
      points[i][1]
    );

    if (isCoLinear) {
      localMaxColinearCount++;
    }
  }

  if (localMaxColinearCount > maxColinearCount) {
    maxColinearCount = localMaxColinearCount;
  }
  localMaxColinearCount = 2;

  if (secondBaseCordinate < points.length - 2) {
    maxPointsHelper(baseCoOrdinate, secondBaseCordinate + 1, points);
    return maxColinearCount;
  }

  maxPointsHelper(baseCoOrdinate + 1, baseCoOrdinate + 2, points);
  return maxColinearCount;
};
const checkCoLinear = (x1, y1, x2, y2, x3, y3) => {
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) === 0;
};

maxPoints([
  [1, 1],
  [3, 2],
  [5, 3],
  [4, 1],
  [2, 3],
  [1, 4],
]);
