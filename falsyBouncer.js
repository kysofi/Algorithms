// Remove all falsy values from an array
// There are only six falsy values in JS: undefined, null, NaN, 0, “” (empty string), false

function bouncer(arr) {
  let newArray = []; // creating a new empty array
  for (var i = 0; i < arr.length; i++) {
    // if the element is truthy, we push it to the new array
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
bouncer([7, "ate", "", false, 9]);
