function slasher(arr, howMany) {
  for (i = 0; i < howMany; i++) {
    arr.shift();
  }
  return arr;
}

slasher([1, 2, 3], 2);