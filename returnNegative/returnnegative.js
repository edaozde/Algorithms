function makeNegative(num) {
    if (num <=0 ) {
      return num
    }
    else if (num > 0) {
      return -Math.abs(num)
    }
  }

  console.log(makeNegative(42))


//   function makeNegative(num) {
//     return -Math.abs(num);
//   }

// function makeNegative(num) {
//     return num < 0 ? num : -num;
//   }
  