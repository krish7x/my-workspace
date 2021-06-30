var isPalindrome = function (x) {
  var result;
  if (x < 0) {
    result = false;
  }
  var palindromeArr = String(x).split("");
  var startIndex = 0;
  var endIndex = palindromeArr.length - 1;
  for (var i = 0; i < palindromeArr.length; ++i) {
    if (palindromeArr[startIndex] === palindromeArr[endIndex]) {
      startIndex++;
      endIndex--;
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};

isPalindrome(11112);
