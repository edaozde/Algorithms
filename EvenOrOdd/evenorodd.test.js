const evenOrOdd = require("./evenorodd");

describe ("Sample Tests", () => {
    it("2 is even", () => {
        expect(evenOrOdd(2)).toEqual("Even");
    });

    it("7 is ood", () => {
        expect(evenOrOdd(7)).toEqual("Odd");
    });

    it("0 is even", () => {
        expect(evenOrOdd(0)).toEqual("Even");
    });

    it("-2 is even", () => {
        expect(evenOrOdd(-2)).toEqual("Even");
    });

    it("-9 is odd", () => {
        expect(evenOrOdd(-9)).toEqual("Odd");
    })
})