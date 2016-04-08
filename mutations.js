function mutation(arr) {
  str1 = arr[0].toLowerCase();
  str2 = arr[1].toLowerCase();
  
  for (i = 0; i < arr[1].length; i++) {
    if (str1.indexOf(str2[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);