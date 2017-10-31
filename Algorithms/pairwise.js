function pairwise(arr, arg) {
  var ray = [],
    pairSum,
    usedIndexVal = [],
    adder;

  if (arr.length === 0) {
    return 0;
  }

  function smallArray(array) {
    var newray = array.map(function(unit) {
      return unit.reduce(function(sum, val) {
        return sum + val;
      });
    });
    var number = Math.min.apply(null, newray);
    var pos = newray.indexOf(number);
    return pos;
  }

  pairSum = arr.map(function(curVal, curIndex, array) {
    var container = [];
    array.map(function(val, i) {
      if ((val + curVal == arg) && (curIndex != i) &&
      (usedIndexVal.indexOf(curIndex) == -1) && (usedIndexVal.indexOf(i) == -1)) {
        container.push([curIndex, i]);
        usedIndexVal.push(curIndex, i);
      }
    });
    /*
    if (container.length > 1) {
      return container[smallArray(container)];
    }

    console.log(container);
    console.log(usedIndexVal);
    */
    if (curIndex == arr.length - 1) {
      adder = usedIndexVal;
    }
  });

var final = adder.reduce(function(sum, unit){
  return sum + unit;
}, 0);
  //return sum + value;
  return final;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); //should return 11.
console.log(pairwise([1, 3, 2, 4], 4)); //should return 1.
console.log(pairwise([1, 1, 1], 2)); //should return 1.
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); //should return 10.
console.log(pairwise([], 100)); //should return 0.
