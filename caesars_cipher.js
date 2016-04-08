function rot13(str) { // LBH QVQ VG!
  var newStr = "";
  
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode < 65 || charCode > 90) {
      newStr += String.fromCharCode(charCode);
    } else {
      if (charCode + 13 > 90) {
        charCode = (charCode + 13 - 91) + 65;
        newStr += String.fromCharCode(charCode);
      } else {
        newStr += String.fromCharCode(charCode + 13);
      }
    }
  }
  
  return newStr;
}

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");