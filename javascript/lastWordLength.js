var lengthOfLastWord = function (s) {
  var strArr = s.split(" ");
  var result = [];
  var len = strArr.length;
  for (var i = len - 1; i >= 0; --i) {
    if (strArr[i]) result.push(strArr[i]);
  }
  return result.length ? result[0].length : 0;
};

console.log(lengthOfLastWord("Hello World"));
