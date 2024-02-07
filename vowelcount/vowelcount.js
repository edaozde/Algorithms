/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

const getCount = (str) => {
  const tab = str.split("");
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let count = 0;

  for (let i = 0; i < tab.length; i++) {
    if (vowels.includes(tab[i])) {
      count++;
    }
  }

  return count;
};

console.log(getCount("je cherche un chien"));

module.exports = getCount;


// function getCount(str) {
//     var vowelsCount = 0;
//     var vowels = ["a","e","i","o","u"];
//     for(var i = 0;i < str.length;i++){
//       for(var j=0;j<vowels.length;j++){
//         if(str[i] === vowels[j]){
//           vowelsCount++;
//         }
//       }
//     }
    
//     return vowelsCount;
//   }
  

// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//    }