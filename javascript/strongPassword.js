var strongPasswordChecker = function (password) {
  var len = password.length;
  var flag = false,
    lower = 0,
    upper = 0,
    numeric = 0;
  if (len < 6 && len > 20) {
    //wrong length
  }

  for (var i = 0; i < len; ++i) {
    if (password[i] === password[i].toUpperCase()) {
      upper = 1;
    }
    if (password[i] === password[i].toLowerCase()) {
      lower = 1;
    }
    if (typeof parseInt(password[i]) === Number) {
      numeric = 1;
    }
  }
  console.log(parseInt(password[0]));

  console.log(lower);
  console.log(upper);
  console.log(numeric);

  var tempChar = "";

  for (var i = 0; i < len; ++i) {
    if (password[i] !== tempChar) {
      tempChar = password[i];
    }

    if (i !== len - 1) {
      if (tempChar === password[i + 1]) {
        //2 times
        if (i !== len - 2) {
          if (tempChar === password[i + 2]) {
            //3 times
          }
        }
      }
    }
  }
};

strongPasswordChecker("2");
