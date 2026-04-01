// ARTHIMETIC OPERATOR
console.log(4 + 5);
console.log(5 - 6);
console.log(4 * 2);
console.log(2.2 * 2);
console.log(5.0 * 2);
console.log(5.0 * 2.0);
console.log(5 ** 2);
console.log(4 / 2);
console.log(5 / 2);
console.log(3 % 2);
let a = 10;
console.log(a++);
console.log(a--);

// ASSIGNMENT OPERATOR
let b = 20;
let c = 2;
console.log((b += c));
console.log((b -= c));
console.log((b *= c));
console.log((b /= c));
console.log((b %= c));
console.log((b **= c));

// COMPARISON OPERATOR
d = 32.2;
e = 20;
f = "20";
console.log(d == e);
console.log(d != e);
console.log(e === f);
console.log(e !== f);
console.log(e > f);
console.log(e > f);
console.log(e >= d);
console.log(e <= d);
// TERNARY OPERATOR
// SYNTAX: CONDITION?TRUE:FALSE
console.log(e == d ? "right" : "wrong");

// LOGICAL OPERATOR

console.log(e < d && e > d ? "possible" : "not possible");
console.log(e < d || e > d ? "possible" : "not possible");
// console.log(not operator)

// CONDITIONAL STATEMENT
// IF
let g = 3;
if (g == 3) {
  console.log("the number is 3");
}
console.log("program ended");
// IF ELSE
// AGE 25
let age = 25;
if (age <= 20 && age >= 10) {
  console.log("age is btwn 10 and 20");
} else {
  console.log("age is not btwn 10 and 20");
}
// AGE 15
let age1 = 15;
if (age1 <= 20 && age1 >= 10) {
  console.log("age is btwn 10 and 20");
} else {
  console.log("age is not btwn 10 and 20");
}

// IF ELSE IF
console.log("number is 20");
let n = 20;
if (n % 3 == 0 && n % 5 == 0) {
  console.log("number is divisible by 3 and 5");
} else if (n % 5 == 0) {
  console.log("number is divisible by 5");
} else if (n % 3 == 0) {
  console.log("number is divisible by 3");
} else {
  console.log("number is not divisible by both 3 and 5");
}

console.log("number is 15");
let n1 = 15;
if (n1 % 3 == 0 && n1 % 5 == 0) {
  console.log("number is divisible by 3 and 5");
} else if (n1 % 5 == 0) {
  console.log("number is divisible by 5");
} else if (n1 % 3 == 0) {
  console.log("number is divisible by 3");
} else {
  console.log("number is not divisible by both 3 and 5");
}
console.log("number is 9");
let n2 = 9;
if (n2 % 3 == 0 && n2 % 5 == 0) {
  console.log("number is divisible by 3 and 5");
} else if (n2 % 5 == 0) {
  console.log("number is divisible by 5");
} else if (n2 % 3 == 0) {
  console.log("number is divisible by 3");
} else {
  console.log("number is not divisible by both 3 and 5");
}
