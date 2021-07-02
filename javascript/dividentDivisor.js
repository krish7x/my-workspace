var searchRange = function (nums, target) {
  var a;
  var index = 0;
  var result = [];

  if (!result.length) {
    result.push(-1);
    result.push(-1);
  } else if (result.length == 1) {
    result.push(-1);
  } else {
    result.splice(1, result.length - 1);
  }

  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
