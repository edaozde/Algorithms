const { get } = require('http');
const getCount = require('./vowelcount');

describe("Sample Tests", () => {
    it("abracadabra must return 5", () => {
        expect(getCount("abracadabra")).toBe(5)
    });

    it("je cherche un chien must return 6", () => {
        expect(getCount("je cherche un chien")).toBe(6)
    });

    
})