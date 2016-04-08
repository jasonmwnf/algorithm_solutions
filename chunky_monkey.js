function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var count = Math.floor(arr.length / size);
  var count2 = 0;
  
  if (arr.length % size !== 0) {
    for (i = 0; i < count + 1; i++) {
      newArr[i] = arr.slice(count2, count2 + size);
      count2 += size;
    }
  } else {
    for (i = 0; i < count; i++) {
      newArr[i] = arr.slice(count2, count2 + size);
      count2 += size;  
    }
  }
  
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);