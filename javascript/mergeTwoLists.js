var mergeTwoLists = function (l1, l2) {
  var list = [];
  for (var i = 0; i < l1.length; ++i) {
    list.push(l1[i]);
  }
  for (var i = 0; i < l2.length; ++i) {
    list.push(l2[i]);
  }
  return list.sort();
};

var l1 = [1, 2, 3];
var l2 = [0];

console.log(mergeTwoLists(l1, l2));
