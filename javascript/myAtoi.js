var myAtoi = function (s) {
  //step 1 --> removes whitespace
  var trimedStr = s.trim();

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
  console.log(trimedStr);
  //step3
  if (isNaN(parseInt(trimedStr[0]))) {
    return 0;
  } else {
    for (var i = 0; i < trimedStr.length; ++i) {
      if (!isNaN(parseInt(trimedStr[i]))) {
        numStr += trimedStr[i];
      } else {
        return numStr;
      }
    }
  }
  var num = 0;
  //step4
  num = parseInt(numStr);
  var result;
  //clamp
  if (num < Math.pow(2, 31)) {
    result = num;
  } else {
    console.log(-Math.pow(2, 31));
  }
  var temp = 0;
  if (isNegative) {
    temp = -num;
  } else {
    temp = num;
  }
  if (temp < -Math.pow(2, 31)) {
    result = clamp(num, 0, Math.pow(2, 31));
  } else if (num > Math.pow(2, 31)) {
    result = clamp(num, 0, Math.pow(2, 31) - 1);
  } else {
    result = temp;
  }

  if (isNegative) {
    result = -result;
  }
  return result;
};

var clamp = (num, min, max) => {
  return Math.min(max, Math.max(min, num));
};

console.log(myAtoi("  -0012a42"));
