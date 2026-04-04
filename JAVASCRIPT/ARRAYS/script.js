// ARRAY
const f = ["banana", "apple", "grapes"];
const a1 = [7, "Harry", false];
console.log(f);
console.log(a1);

// ACCESSING VALUES'
let n = [1, 2, 3, 4, 4];
console.log(n);
console.log(n[4]);
// FINDING THE LENGTH
console.log(n.length);
console.log(f[0].length);
// CHANGING THE VALUES
a1[0] = 6;
console.log(a1);
// typeof
console.log(typeof n);
// ARRAY METHODS
// TO STRING()
let b = [2, 3, 4, 7];
console.log(b.toString());

// JOIN()
console.log(b.join("+"));
// POP()
b1 = b.pop();
console.log(b);
console.log(b1);

// PUSH()

let a2 = [5, 46, 6, 56, 4];
a3 = a2.push(9);
console.log(a2);
console.log(a3);
// SHIFT()
a4 = a2.shift();
console.log(a2);
console.log(a4);
// UNSHIFT()
a5 = a2.unshift(1);
console.log(a2);
console.log(a5);
// DELETE
delete a2[2];
console.log(a2);
// CONCAT()

let d1 = [1, 2, 3];
let d2 = [4, 5, 6];
let d3 = [9, 8, 7];
console.log(d2.concat(d1, d3));
// SORT()
let u = [2, 7, 8, 1, 3, 9, 4, 5, 0];
console.log(u.sort());
// SPLICE()

const u2 = [1, 2, 3, 4, 5];
console.log(u2.splice(4, 1, 23, 24));
console.log(u2);
// SLICE()
const u3 = [1, 8, 7, 4, 3, 8];
console.log(u3.slice(2));
console.log(u3.slice(1, 4));
// REVERSE()
console.log(u3.reverse());
console.log(u3);

// LOOPING THROUGH ARRAYS
// FOREACHLOOP
// Map()
// FILTER()
// REDUCE METHOD
// ARRAY FROM
// FOR OF
// FOR IN
