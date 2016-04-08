function destroyer(arr) {
  var newArr = arguments[0];
  var compareValue;
  
  function filterArr(value) {
    return value !== compareValue;
  }
  
  for (var i = 1; i < arguments.length; i++) {
    compareValue = arguments[i];
    newArr = newArr.filter(filterArr);
  }
  
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);