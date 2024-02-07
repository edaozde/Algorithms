const getMiddle = require('./middleCharacter')

describe("Sample Tests", () => {
    it("chien doit retourner i", () => {
        expect(getMiddle("chien")).toBe("i")
    })
})