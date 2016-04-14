function translatePigLatin(str) {
  var vowels = "aeiou";
  var ending = "";
  
  function replaceFirst(str) {
    return str.replace(str[0], "");
  }
  
  if (vowels.indexOf(str[0]) > -1) {
    str = str + "way";
  } else if (vowels.indexOf(str[1]) > -1) {
    ending = str[0] + "ay";
    str = replaceFirst(str);
    str = str + ending;
  } else {
    ending = str[0] + str[1] + "ay";
    str = replaceFirst(str);
    str = replaceFirst(str);
    str = str + ending;
  }
  return str;
}

translatePigLatin("consonant");