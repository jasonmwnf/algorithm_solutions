function sumAll(arr) {

  var maxNum = Math.max.apply(null, arr);
  var minNum = Math.min.apply(null, arr);
  var newSum = 0;
  
  for (var i = minNum; i <= maxNum; i++) {
    newSum += i;
  }
  
  return newSum;
  
}

sumAll([10, 5]);