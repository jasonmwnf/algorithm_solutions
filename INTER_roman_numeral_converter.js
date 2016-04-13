function convertToRoman(num) {
  var romanNum = "";
  var str = num.toString();
  
  function toSingles(a) {
    var singles = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    if (a !== 0) {
      return singles[a-1];
    } 
  }
  
  function toTens(a) {
    var tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    if (a !== 0) {
      return tens[a-1];
    } 
  }
  
  function toHundreds(a) {
    var hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    if (a !== 0) {
      return hundreds[a-1];
    } 
  }
  
  function toThousands(a) {
    var thousands = ["M", "MM", "MMM"];
    return thousands[a-1];
  }
 
  if (str.length === 1) {
    romanNum = toSingles(str);
  } else if (str.length === 2) {
    romanNum = toTens(str[0]) + toSingles(str[1]);
  } else if (str.length === 3) {
    romanNum = toHundreds(str[0]) + toTens(str[1]) + toSingles(str[2]);
  } else if (str.length === 4) {
    romanNum = toThousands(str[0]) + toHundreds(str[1]) + toTens(str[2]) + toSingles(str[3]);
  }
  
  while (romanNum.indexOf("undefined") > -1) {
    romanNum = romanNum.replace("undefined", "");
  }
  
  return romanNum;
}

convertToRoman(500);
