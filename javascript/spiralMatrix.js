var spiralOrder = function (matrix) {
  var result = [];
  var seq = 0;
  var iLen = matrix.length;
  var jLen = matrix[0].length;
  for (var i = 0; i < matrix.length; ++i) {
    for (var j = 0; j < matrix[i].length; ++j) {
      if (i == 0) {
        result.push(matrix[i][j]);
        if (j == jLen - 1) {
          seq++;
        }
      } else {
        if (seq == 1 && j == jLen - 1) {
          result.push(matrix[i][jLen - 1]);
          if (i == iLen - 1) {
            seq++;
          }
        }
        if (seq == 2) {
          if (i == jLen - 1) {
            console.log("hey");
          }
        }
      }
    }
  }
  console.log(seq);

  console.log(result);
};

spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
