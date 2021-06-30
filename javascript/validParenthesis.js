const isValid = (s) => {
  const data = [];

  const checkClose = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const strlen = s.length;

  for (var i = 0; i < strlen; ++i) {
    const str = s[i];
    if (str in checkClose == true) {
      if (data && data[data.length - 1] == checkClose[str]) {
        data.pop();
      } else {
        return false;
      }
    } else {
      data.push(str);
    }
  }
  return data.length ? false : true;
};
