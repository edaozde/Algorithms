/*
You are going to be given a word. 
Your job is to return the middle character of the word.
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.
*/

const getMiddle = (s) => {
  if (s.length % 2 !== 0) {
    const mid = (s.length + 1) / 2;
    return s.slice(mid - 1, mid);
  } else {
    const mid2 = s.length / 2;
    return s.slice(mid2 - 1, mid2 + 1);
  }
};

console.log(getMiddle("chien"));
console.log(getMiddle("test"));
console.log(getMiddle("middle"));


module.exports=getMiddle;

//  return s[Math.floor(s.length/2)]

// function getMiddle(string) {
//     var middleIndex = string.length / 2;
//     if (string.length % 2 == 0) {
//       return string.slice(middleIndex - 1, middleIndex + 1);
//     } else {
//       return string.charAt(middleIndex);
//     }
//   }

// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }