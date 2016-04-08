function bouncer(arr) {
  var newArr = [];
  
  function filterArr(value) {
    return value;
  }
  
  newArr = arr.filter(filterArr);
  return newArr;
}

bouncer([7, "ate", "", false, 9]);