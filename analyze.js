function analyze(array) {
    let object = {};
    array.sort()
    let sum = 0;
    let max = array[array.length - 1];
    let min = array[0];

    for (let i = 0 ; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;

    // push all the variables to the object

    object.average = average;
    object.min = min;
    object.max = max;
    object.length = array.length;

    return object;
  }  

  export {analyze}