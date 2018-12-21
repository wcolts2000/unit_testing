const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpistures.com",
  "myfavoritecats.com",
  "myfavoritecats2.com"
];

// const googleSearch = searchInput => {
//   const matches = googleDatabase.filter(website => {
//     return website.includes(searchInput);
//   });
//   return matches.length > 3 ? matches.slice(0, 3) : matches;
// };

// USE DYNAMIC DB VARIABLE TO ALLOW EASE OF SWAPPING OUT DB FOR PRODUCTION AND TESTING
const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch("cat"));
console.log(googleSearch("cat", googleDatabase));

module.exports = googleSearch;
