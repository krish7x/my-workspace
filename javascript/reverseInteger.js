var reverse = function (x) {
  var sign = x < 0;
  var reverseNum = 0;
  var reverseArr = String(Math.abs(x)).split("").reverse().join("");
  reverseNum = parseInt(reverseArr);

  if (reverseNum > 0x7fffffff) {
    return 0;
  } else {
    if (sign) {
      return -reverseNum;
    } else {
      return reverseNum;
    }
  }
};

console.log(reverse(-153423));
