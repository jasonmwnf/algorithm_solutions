function palindrome(str) {
  newStr = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
  revStr = newStr.split('').reverse().join('');
  if (newStr === revStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");