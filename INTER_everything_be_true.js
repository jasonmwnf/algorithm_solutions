function truthCheck(collection, pre) {
  var counter = 0;
  
  for (var i in collection) {
    if (collection[i].hasOwnProperty(pre) && collection[i][pre]) {
      counter++;
    }
  }
  
  if (counter === collection.length) {
    return true;
  } else {
    return false;
  }
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");