function factorialize(num) {
  var newNum = 1;
  for (var i = 1; i <= num; i++) {
    newNum *= i;
  }
  return newNum;
}

factorialize(5);