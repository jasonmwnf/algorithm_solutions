function uniteUnique() {
  var newArr = [];
  
  for (var i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i]);
  }
  
  var flattened = newArr.reduce(function(a, b) {
    return a.concat(b);
  });
  
  if (!flattened[flattened.length - 1]) {
    flattened.splice(-1, 1); 
  } 
 
  var uniqueArray = flattened.filter(function(elem, pos) {
      return flattened.indexOf(elem) == pos;
  });
  
  return uniqueArray;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);