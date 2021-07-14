var isIsomorphic = function (s, t) {
  var res = true;
  if (s.length !== t.length) {
    res = false;
  }
  var count = 1,
    sInitial = s[0],
    tInitial = t[0];
  var sArr = [],
    tArr = [];
  for (var i = 1; i < s.length; ++i) {
    if (s[i] === sInitial) {
      count++;
      sArr.push(count);
    } else {
      sArr.push(count);
      sInitial = s[i];
    }
    count = 1;
    if (t[i] === tInitial) {
      count++;
      tArr.push(count);
    } else {
      tArr.push(count);
      tInitial = t[i];
    }
    count = 1;
  }
  res =
    sArr.length === tArr.length &&
    sArr.every((value, index) => value === tArr[index]);
  return res;
};

console.log(isIsomorphic("badc", "baba"));
