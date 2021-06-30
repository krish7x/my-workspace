let arr = ["P", "T", "P", "T", "T", "P"];
//P -> police
//T -> thief

let counter = 0;
let k = 1;

for (var i = 0; i < arr.length; i++) {
  if (i == 0 && arr[i] == "P") {
    if (arr[i + k] == "T") {
      arr[i + k] = "C"; // C -> caught
      counter += 1;
    }
  } else {
    if (arr[i] == "P") {
      if (arr[i - k] == "T") {
        arr[i - k] = "C";
        counter += 1;
      } else if (arr[i + k] == "T") {
        arr[i + k] = "C";
        counter += 1;
      }
    }
  }
}

console.log(counter);
console.log(arr);
