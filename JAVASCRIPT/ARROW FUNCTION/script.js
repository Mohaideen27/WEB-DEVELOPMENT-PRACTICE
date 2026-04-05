// const hello = function () {
//   console.log("HELLO");
// };

// const hello = (key) => console.log(`HELLO 2 ${key}`);
// hello("NAANGA_DAN");

// const hello = (value, movie) => {
//   console.log(`Nee mela eri aadu ${value}`);
//   console.log("Ini Namma aatam dan");
//   console.log(`Movie name ${movie}`);
// };

// hello("KABILA", "SARPATTA PARAMPARAI");

// setTimeout(function () {
//   console.log("HELLO");
// }, 3000);

// setTimeout(() => console.log("Hello"), 3000);

const number = [1, 2, 3, 4, 5, 6];
const squares = number.map((element) => Math.pow(element, 2));
const cube = number.map((value) => Math.pow(value, 3));
const even = number.filter((element) => element % 2 === 0);
const odd = number.filter((element) => element % 2 === 1);
const fac = number.reduce((pro, element) => pro * element);
const sum = number.reduce((sum, element) => sum + element);
console.log(squares);
console.log(cube);
console.log(even);
console.log(odd);
console.log(fac);
console.log(sum);
