/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

*/

function fizzbuzz(n) {
    let tab = [];
    for (i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        tab.push("FizzBuzz");
      } else if (i % 3 === 0) {
        tab.push("Fizz");
      } else if (i % 5 === 0) {
        tab.push("Buzz");
      } else tab.push(i);
    }
  
    return tab;
  }
  
  console.log(fizzbuzz(30));
  
  
  // function fizzbuzz(n)
  // {
  //   var i = 1, arr = [];
  //   while(i <= n) {
  //     var fizz = (i % 3 == 0);
  //     var buzz = (i % 5 == 0);
  //     if(fizz || buzz) {
  //       arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
  //     }
  //     else {
  //       arr.push(i);
  //     }
  //     i++;
  //   }
  //   return arr;
  // }
  
  // var fizzify = fizzbuzz;
  
  
  // function fizzify(i) {
  //     if (i % 15 == 0)
  //       return 'FizzBuzz';
  //     else if (i % 5 == 0)
  //       return 'Buzz';
  //     else if (i % 3 == 0)
  //       return 'Fizz';
  //     else
  //       return i;
  //   }
    
  //   // Return an array
  //   function fizzbuzz(n) {
  //     var res = [];
  //     for (var i = 1; i <= n; ++i) res.push(fizzify(i));
  //     return res;
  //   }
    