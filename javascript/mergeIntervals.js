var merge = function (intervals) {
  var result = [];

  var initalIndex = 0;
  var start = 0;
  var end = 0;
  for (let i = 0; i < intervals.length; i++) {
    for (let j = 0; j < intervals[i].length; j++) {
      if (i == 0) {
        start = intervals[i][0];
        end = intervals[i][1];
        initalIndex++;
      } else {
        if (start >= intervals[i][j] || start <= intervals[i][j]) {
          var res = [start, intervals[i][1]];
          result.push(res);
        } else if (end >= intervals[i][j] || end <= intervals[i][j]) {
          var res = [end, intervals[i][1]];
          result.push(res);
        }
      }
    }
  }

  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
