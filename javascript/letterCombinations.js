/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var len = digits.trim().length;
  if (len == 0) return [];

  var phoneObj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (len == 1) return phoneObj[digits];
  var result = [];

  var first = phoneObj[digits[0]];
  var second = phoneObj[digits[1]];
  for (var x = 0; x < first.length; ++x) {
    for (var y = 0; y < second.length; ++y) {
      console.log(x);
      result.push(phoneObj[digits[x]] + phoneObj[digits[y]]);
    }
  }

  console.log(result);
};

console.log(letterCombinations("26"));
