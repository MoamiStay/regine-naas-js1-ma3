const test = document.querySelector("body");
// test.style.backgroundColor = "cadetblue";
// 78f94f6faf9f48849fcf07596e92cfe7

// GET https://api.rawg.io/api/platforms?key=78f94f6faf9f48849fcf07596e92cfe7
// GET https://api.rawg.io/api/games?key=78f94f6faf9f48849fcf07596e92cfe7&dates=2019-09-01,2019-09-30&platforms=18,1,7

// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=78f94f6faf9f48849fcf07596e92cfe7


console.log("Question 1");
// function getRemainder(a, b) {
//     return a % b;
//     }

getRemainder = (a, b) => {return a % b;}
// getRemainder(3, 2);
// console.log(getRemainder(10, 5));