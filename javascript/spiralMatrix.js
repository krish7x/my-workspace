var spiralOrder = function (matrix) {
  var result = [];
  var dummy = [];
  var seq = 0;
  var iLen = matrix.length;
  var jLen = matrix[0].length;
  if (iLen === 1) {
    for (var i = 0; i < matrix.length; ++i) {
      for (var j = 0; j < matrix[i].length; ++j) {
        result.push(matrix[i][j]);
      }
    }
    return result;
  }
  if (iLen === 2) {
    for (var i = 0; i < matrix.length; ++i) {
      for (var j = 0; j < matrix[i].length; ++j) {
        if (i == 0) {
          result.push(matrix[i][j]);
        } else {
          result.push(matrix[i][jLen - 1 - j]);
        }
      }
    }
    return result;
  }
  for (var i = 0; i < matrix.length; ++i) {
    for (var j = 0; j < matrix[i].length; ++j) {
      console.log(i);
      if (jLen === 1) {
        console.log(matrix[i]);
        result.push(matrix[i][j]);
      } else if (i == 0) {
        // 1st row
        result.push(matrix[i][j]);
        if (j == jLen - 1) {
          seq++;
        }
      } else {
        if (seq == 1 && j == jLen - 1 && i !== iLen - 1) {
          // last column
          result.push(matrix[i][j]);
          if (j == jLen - 1) seq++;
        }
        if (i == iLen - 1 && seq == 2) {
          // last row
          result.push(matrix[i][jLen - 1 - j]);
        } else if (j !== jLen - 1) {
          dummy.push(matrix[i][j]);
        }
      }
    }
  }
  return [...result, ...dummy];
};

console.log(spiralOrder([[1,2],[3,4]]));
