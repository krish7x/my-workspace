var romanNumber = function (s) {
  var romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var len = s.length;
  if (len == 1) {
    return romanObj[s];
  }

  var prev = 0;
  var res = 0;
  for (var i = len - 1; i >= 0; --i) {
    var num = romanObj[s.charAt(i)];
    if (num >= prev) {
      res += num;
      prev = num;
    } else {
      res -= num;
    }
  }
  return res;
};

console.log(romanNumber("IV"));
