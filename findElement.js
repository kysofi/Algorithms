// Challenge asks us to look through array
// This is done using a for loop

function findElement(arr, func) {
  let num = 0;
  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  // If none of the numbers in the array pass the function’s test, we return undefined.
  return undefined;
}
findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// OR

function findElement(arr, func) {
  return arr.find(func);
}
