const filter_list = require("./listfiltering");

describe("tests", () => {
  test("test", () => {
    expect(filter_list([1, 2, "a", "b"])).toStrictEqual([1, 2]);
    expect(filter_list([1, "a", "b", 0, 15])).toEqual([1, 0, 15]);
    expect(filter_list([1,2,'aasf','1','123',123])).toEqual([1, 2, 123])

  });
});
//NE PAS UTILISER TOBE POUR COMPARER DES TABLEAUX TOEQUAL OU TOSTRICTEQUAL
