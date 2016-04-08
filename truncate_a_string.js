function truncateString(str, num) {
  var toShorten = 0;
  var newStr = "";
  if (num <= 3) {
    toShorten = str.length - num;
    newStr = str.slice(0, -toShorten) + "...";
    return newStr;
  } else if (str.length > num) {
    num -= 3;
    toShorten = str.length - num;
    newStr = str.slice(0, -toShorten) + "...";
    return newStr;
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);