/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  var result = 0;
  var temp = 0;
  for (var i = 0; i < triangle.length; ++i) {
    for (var j = 0; j < triangle[i].length; ++j) {
      if (triangle[i].length === 1) {
        result += triangle[i][j];
      } else {
        if (j === 0) {
          temp = triangle[i][j];
        } else {
          if (temp > triangle[i][j]) {
            temp = triangle[i][j];
          }
        }
      }
    }
    result += temp;
  }
  return result;
};

console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
