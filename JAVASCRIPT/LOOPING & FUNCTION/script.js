// LOOP FUNCTION

// FOR LOOP
// Example: Print numbers 1 to 5
// for (let i = 1; i <= 5; i++) {
//   console.log("Number:", i);
// }

for (let i = 100; i >= 20; i -= 20) {
  console.log("number: ", i);
}

// FOR IN LOOP
const user = { name: "sameer", age: 25, role: "full stack developer" };

for (let key in user) {
  console.log(key + ":" + user[key]);
}

// const a=[1,2,3,4,5,6]
// for(let a[i] in a){
//     console.log(a[i])
//     i++;
// }
// FOR OF LOOP

const colors = [1, 2, 4];

for (let i of colors) {
  console.log("number: ", i);
}

// WHILE LOOP
let count = 1;
while (count <= 3) {
  console.log("count is:", count);
  count++;
}
// DO WHILE LOOP
let i = 1;

do {
  console.log("This is runs at least once. i is:", i);
  i++;
} while (i < 5);
