function getIndexToIns(arr, num) {
  var newArr = arr.sort(function(a,b) {
    return a-b;
  });
  
  for (var i = 0; i < arr.length; i++) {
    if (num === newArr[0]) {
      return 0;
    } else if (num > newArr[arr.length - 1]) {
      return arr.length;
    } else if (num > newArr[i] && num <= newArr[i + 1])
      return i + 1;
  }
}

getIndexToIns([40, 60], 50);