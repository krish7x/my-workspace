function longestCommonPrefix(strs: string[]): string {
  if (strs.length == 0) return "";
  var prefix: string = strs[0];

  for (var i: number = 0; i < strs.length; ++i) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length == 0) return "";
    }
  }

  return prefix;
}

var arr: string[] = ["Arsh", "Arun", "Arasan"];
console.log(longestCommonPrefix(arr));
