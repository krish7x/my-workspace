var strStr = function (haystack, needle) {
  var len = haystack.length;
  var needleLen = needle.length;
  if (!needleLen) {
    return 0;
  }

  if (haystack.includes(needle)) {
    for (var i = 0; i < len; ++i) {
      if (needle.includes(haystack[i])) {
        return i;
      }
    }
  } else {
    return -1;
  }
};

console.log(strStr("mississippi", "issip"));
