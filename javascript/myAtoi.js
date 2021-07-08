var myAtoi = function (s) {
  //step 1 --> removes whitespace
  var trimedStr = s.trim();
  if (!trimedStr.length) return 0;
  //if length only 1
  if (trimedStr.length == 1) {
    if (isNaN(parseInt(trimedStr[0]))) {
      return 0;
    } else {
      return parseInt(trimedStr[0]);
    }
  }

  //step 2
  var isNegative = false;
  if (trimedStr[0] === "-") {
    isNegative = true;
    trimedStr = trimedStr.replace("-", "");
  } else if (trimedStr[0] === "+") {
    trimedStr = trimedStr.replace("+", "");
  }

  var numStr = "";
  for (var i = 0; i < trimedStr.length; ++i) {
    if (i == 0) {
      if (isNaN(parseInt(trimedStr[0]))) {
        return 0;
      } else {
        numStr += trimedStr[i];
      }
    } else {
      if (!isNaN(parseInt(trimedStr[i]))) {
        numStr += trimedStr[i];
      } else {
        var num = isNegative ? -parseInt(numStr) : parseInt(numStr);
        if (num < Math.pow(-2, 31)) {
          num = -clamp(-num, 0, Math.pow(2, 31));
        } else if (num > Math.pow(2, 31) - 1) {
          num = clamp(num, 0, Math.pow(2, 31) - 1);
        }
        return num;
      }
    }
  }

  var num = 0;
  if (isNegative) {
    num = -parseInt(numStr);
  } else {
    num = parseInt(numStr);
  }

  var result = 0;
  if (num < Math.pow(-2, 31)) {
    result = -clamp(-num, 0, Math.pow(2, 31));
  } else if (num > Math.pow(2, 31) - 1) {
    result = clamp(num, 0, Math.pow(2, 31) - 1);
  } else {
    result = num;
  }
  return result;
};

var clamp = (num, min, max) => {
  return Math.min(max, Math.max(min, num));
};
