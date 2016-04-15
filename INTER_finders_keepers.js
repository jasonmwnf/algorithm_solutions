function findElement(arr, func) {
  var newNum = 0;
  
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newNum = arr[i];
      return newNum;
    }
  }
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });