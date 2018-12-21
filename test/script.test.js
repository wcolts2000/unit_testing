const googleSearch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpics.com"];

it("this is a test", () => {
  // console.log(googleSearch);
  // googleSearch("testtest", dbMock);
  expect("hello").toBe("hello");
});

it("is searching google", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);
  expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpics.com"]);
});
