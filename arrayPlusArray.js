function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  let newArray = arr1.concat(arr2);
  console.log(newArray);

  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }
  return sum;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

//function arrayPlusArray(arr1, arr2) {
//return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//}
