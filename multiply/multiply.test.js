
/*edge cases 
1. 0 comme opérande
2. gérer les négatifs
3. décimal
*/
const multiply = require("./multiply");

describe ("multiply", () => {
    test ("return a result for number => 0", () => {
        expect(multiply(1,5)).toBe(5);
        expect(multiply(3,0)).toBe(0);
    })
});

