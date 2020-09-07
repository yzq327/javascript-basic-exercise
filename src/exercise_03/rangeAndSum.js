export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var resultArray = [];
  if( start < end ){
    for (var i = start; i < end ; i++){
      resultArray.push(i);
    }    
  }
  if(start > end) {
    for (var i = start; i > end; i--){
      resultArray.push(i);
    }    
  }
  return resultArray;  
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  
  var totalSum = 0;
  for (var i = 0; i < numbers.length; i++){
    totalSum += numbers[i];
  }
   return totalSum;
/*
//var totalSum=0;
  return numbers.reduce((previous, current) => {
    return previous + current;
  });
  */
}
