var plusOne = function (digits) {
  var length = digits.length;
  var result;
  if (digits[length - 1] < 9) {
    digits[length - 1] += 1;
  } else {
    result = String((digits[length - 1] += 1));
    strLen = result.length;
    digits.splice(length - 1);
    for (var i = 0; i < result.length; ++i) {
      digits.push(parseInt(result[i]));
    }
  }

  return digits;
};
arr = [9, 9];
console.log(plusOne(arr));
