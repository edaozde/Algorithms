//In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  // Return a new array with the strings filtered out
  let newTab = [];
  for (i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      newTab.push(l[i]);
    }
  }
  return newTab;
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]), [1, 0, 15]);
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
//

module.exports = filter_list;


// function filter_list(l) {
//     return l.filter(function(v) {return typeof v == 'number'})
//   }