function diffArray(arr1, arr2) {
  var newArr = [];
  
  function compareArr(arr1, arr2) {
    var counter = 0;
    
    for (var i = 0; i < arr2.length; i++) {
      for (var j = 0; j < arr1.length; j++) {
        if (arr2[i] === arr1[j])  {
          counter = 0;
        } else {
          counter++;
        }
      }
      
     if (counter === arr1.length) {
       newArr.push(arr2[i]);
     } 
      
     counter = 0;
    }
  }
  
  compareArr(arr1, arr2);
  compareArr(arr2, arr1);
  
  return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
