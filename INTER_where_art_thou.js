function whereAreYou(collection, source) {
  var arr = [];
  
    for (var i = 0; i < collection.length; i++) {

      var counter = 0;

      for (var key in source) {
        if (collection[i][key] === source[key]) {
          counter++;
        }
      }

      if (counter === Object.keys(source).length) {
        arr.push(collection[i]);
      }
    }

  return arr;
}

whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })