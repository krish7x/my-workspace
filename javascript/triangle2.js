/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  var result = 0;
  var temp = 0;
  for (var i = 1; i < triangle.length; ++i) {
    for (var j = 0; j < triangle[i].length; ++j) {
      var sum = 0;
      if (j === 0) {
        sum = triangle[i][j] + triangle[i - 1][j];
        console.log(sum);
      } else if (j === triangle[i].length - 1) {
        sum = triangle[i][j] + triangle[i - 1][triangle[i - 1].length - 1];
        console.log(sum);
      } else {
        var min = Math.min(triangle[i - 1][j], triangle[i - 1][j - 1]);
        sum = min + triangle[i][j];
        console.log(sum);
      }
      console.log(sum);
    }
  }
  return result;
};

console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
