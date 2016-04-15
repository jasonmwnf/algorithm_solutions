function spinalCase(str) {
  
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.replace(/\s/g, '-');
  str = str.replace(/_/g, '-').toLowerCase();
  
  return str;
}

spinalCase("thisIsSpinalTap");