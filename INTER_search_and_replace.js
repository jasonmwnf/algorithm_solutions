function myReplace(str, before, after) {
  var newStr = "";
  
  if (before[0] === before[0].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
    newStr = str.replace(before, after);
  } else {
    after = after.replace(after[0], after[0].toLowerCase());
    newStr = str.replace(before, after);
  }
  
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");