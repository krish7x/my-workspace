var searchMatrix = function (matrix, target) {
  var result = false;
  var mid = matrix.length / 2;
  for (var i = 0; i < mid; ++i) {
    for (var j = 0; i < matrix[i].length; ++j) {
      if (matrix[i][j] == target) {
        result = true;
      }
    }
  }
  console.log(result);
  return result;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
