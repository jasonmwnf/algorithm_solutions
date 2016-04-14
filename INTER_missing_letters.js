function fearNotLetter(str) {
 
  for (var i = 0; i < str.length - 1; i++) {
    var num1 = str.charCodeAt(i) + 1;
    var num2 = str.charCodeAt(i + 1);
    
    if (num1 !== num2) {
      str = String.fromCharCode(str.charCodeAt(i) + 1);
      return str;
    } 
  }
}

fearNotLetter("abce");