function repeatStr(n, s) {
    let result = "";

    for (i=0; i<n; i++) {

        result += s
    }
return result
  
   //return s.repeat(5)
}

console.log(repeatStr(5, "#"));
