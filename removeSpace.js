//Write a function that removes the spaces from the string, then return the resultant string.
const noSpace = (x) => {
  // let newX = x.split(" ");

  // return newX.join("");

  let newX = "";

  for (i = 0; i < x.length; i++) {
    if (x[i] != " ") {
      newX += x[i];
    }
  }
  return newX;
};

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
