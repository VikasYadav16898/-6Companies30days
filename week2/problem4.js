/**
 * @param {number[][]} points
 * @return {number}
 */
let boomerangCount = 0;
var numberOfBoomerangs = function (points) {
  if (points.length < 3) {
    return 0;
  }
  return helpernumberOfBoomerang(0, 1, points);
};

const helpernumberOfBoomerang = (basePoint, secondBasePoint, points) => {
  if (basePoint >= points.length) {
    return boomerangCount;
  }
  if (secondBasePoint >= points.length) {
    return helpernumberOfBoomerang(basePoint + 1, 0, points);
  }
  for (let i = 0; i < points.length; i++) {
    if ((basePoint, secondBasePoint, points[i])) {
      if (i === basePoint || i === secondBasePoint) {
        continue;
      }
      if (
        calculateDistance(points[basePoint], points[secondBasePoint], points[i])
      ) {
        boomerangCount++;
      }
    }
  }
  return helpernumberOfBoomerang(basePoint, secondBasePoint + 1, points);
};

const calculateDistance = (p1, p2, p3) => {
  return (
    Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2)) ===
    Math.sqrt(Math.pow(p3[0] - p1[0], 2) + Math.pow(p3[1] - p1[1], 2))
  );
};

const res = numberOfBoomerangs([
  [1, 1],
  [2, 2],
  [3, 3],
]);

console.log(res);
