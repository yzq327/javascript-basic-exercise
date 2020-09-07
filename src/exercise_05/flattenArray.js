export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var res=[];

  if(array === null || array === undefined){
    throw new Error('Flatten undefined or null array');
  }else{
    
    for(var i = 0; i < array.length; i++){
      if(Array.isArray(array[i])){
        res =[].concat(...array);
        //res = res.concat(flatten(array[i]));
      }else{
        res.push(array[i]);
      } 
    } 
    
    
    return res; 
  }
}
