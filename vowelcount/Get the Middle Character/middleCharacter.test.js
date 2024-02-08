const getMiddle = require('./middleCharacter')

describe("Sample Tests", () => {
    it("chien doit retourner i", () => {
        expect(getMiddle("chien")).toBe("i")
    });
    it("test doit retourner es", () => {
        expect(getMiddle("test")).toBe("es")
    });

    it("middle doit retourner dd", () => {
        expect(getMiddle("middle")).toBe("dd")
    });
})