var reformat = function (s) {
  var digits = "",
    alphabets = "",
    result = "";
  for (var i = 0; i < s.length; ++i) {
    if (isNaN(s[i])) {
      alphabets += s[i];
    } else {
      digits += s[i];
    }
  }
  if (s.length == 1) {
    return s;
  }
  if (!digits.length || !alphabets.length) {
    return "";
  }
  if (digits.length - alphabets.length > 1) {
    return "";
  }
  if (digits.length >= alphabets.length) {
    for (var i = 0; i < digits.length; ++i) {
      if (digits[i] !== undefined) {
        result += digits[i];
      }
      if (alphabets[i] !== undefined) {
        result += alphabets[i];
      }
    }
  } else {
    for (var i = 0; i < alphabets.length; ++i) {
      if (alphabets[i] !== undefined) {
        result += alphabets[i];
      }
      if (digits[i] !== undefined) {
        result += digits[i];
      }
    }
  }
  return result;
};

console.log(reformat("a"));
