function findLongestWord(str) {
  var arr = str.split(' ');
  var length = 0;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
       length = arr[i].length; 
    }
  }
  return length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//returns length of longet word in a string as per challenge instructions. 